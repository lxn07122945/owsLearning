/**
 * 自定义Promise函数模块： IIFE
 */
(function (window) {
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    /**
     Promise构造函数
     * excutor : 执行器函数
     */
    function Promise(excutor) {
        const self = this;
     
        this.status = PENDING;
        this.data = undefined;
        this.callbacks = [];
        function resolve(value) {
            // Promise状态只允许修改一次
            if (self.status !== PENDING) {
                return;
            }
            // 修改状态
            self.status = RESOLVED
            // 保存value
            self.data = value;
            // 如果有待执行的callback函数，立即异步执行回调函数
            if (self.callbacks.length > 0) {
                // 放入异步宏任务队列
                setTimeout(() => {
                    self.callbacks.forEach(callbackItem => {
                        callbackItem.onResolved(value)
                    });
                }, 0)
            }
        }
        function reject(reason) {
             // Promise状态只允许修改一次
             if (self.status !== PENDING) {
                return;
            }
             // 修改状态
             self.status = RESOLVED
             // 保存value
             self.data = reason;
             // 如果有待执行的callback函数，立即异步执行回调函数
             if (self.callbacks.length > 0) {
                 // 放入异步宏任务队列
                 setTimeout(() => {
                    self.callbacks.forEach(callbackItem => {
                         callbackItem.onRejected(value)
                     });
                 }, 0)
             }

        }

        try {
            excutor(resolve, reject);
        } catch (err) {
            //如果执行器抛出异常，promise对象变为reject
            reject(err);
        }
    };

    /**
     * Promise原型对象的then方法
     * 指定成功或失败的回调函数，函数的执行结果返回一个新的Promise
     */
    Promise.prototype.then = function (onResolved, onRejected) {

        // 指定回调函数的默认值（必须是函数）
        // 向后传递成功的value
        onResolved = typeof onResolved === 'function' ? onResolved : value => value;
        // 错误穿透，指定默认的失败回调
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        const self = this;
        /**
         * 调用指定的函数处理,并根据执行结果修改return的promise的状态
         * @param {Obj} callbakc 
         */
       
        return new Promise((resolve, reject) => {

            // 执行指定的函数并根据执行结果修改返回promis的状态
            function handle (callbakc) {
                try {
                    const result = callbakc(self.data);
                    if (result instanceof Promise) {
                        result.then(resolve, reject);
                    }
                    else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                };
            }
            // pending状态，存储回调函数
            if (self.status === PENDING) {
                self.callbacks.push({
                    onResolved (value) {
                        handle(onResolved);
                    },
                    onRejected (reason) {
                        handle(onRejected);
                    }
                });
            }
            else if (self.status === RESOLVED) {
                setTimeout(() => {
                    handle(onResolved);
                });
            }
            else {
                setTimeout(() => {
                    handle(onRejected);
                });
            }
        });
    };

    
    /**
     * Promise原型对象的catch方法
     * 指定失败的获取结果，返回一个新的Promise
     */
    Promise.prototype.catch = function (onrejected) {
        return this.then(undefined, onrejected);
    };

    /**
     * Promise函数对象的resolve方法
     * 返回一个Promise,状态位置
     */
    Promise.resolve = function (value) {
        // 返回一个失败的promise
        return new Promise((resolve, reject) => {
            // value 是promise
            if (value instanceof Promise) {
                // 使用value的结果作为当前promise的结果
                value.then(resolve, reject);
            }
            else {
                //value 不是Promise
                resolve(value);
            }
        })
    }

    /**
     * Promise函数对象的reject方法
     * 返回一个指定reason的失败的Promise
     */
    Promise.reject = function (reason) {
        // 返回一个失败的promise
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    /**
     * Promise函数对象的all方法
     * 返回一个新的Promise：只有当所有的Promise都成功时，才成功；有一个失败的时候就失败
     */
    Promise.all = function (promises) {
        // 用于保存传入promise的每一项的值
        const values = new Array(promises.length);
        let resolveCount = 0;
    
        return new Promise((resolve, reject) => {
            //遍历获取每一个promis的结果
            promises.forEach((p, index) => {

                Promise.resolve(p).then(value => {
                    values[index] = value;
                    resolveCount++;
                    if (resolveCount === promises.length) {
                        resolve(values);
                    }
                }, reason => {
                    // 只要由一个失败 就都失败
                    reject(reason);
                })
            });
        });
    }

     /**
     * Promise函数对象的race方法
     * 返回一个新的Promis,结果由第一个完成的Promise决定
     */
    Promise.race = function (promises) {    
        return new Promise((resolve, reject) => {
            //遍历获取每一个promis的结果
            promises.forEach((p) => {
                Promise.resolve(p).then(value => {
                    // 只要有一个成功，就修改返回的promis的状态为成功
                    resolve(value);

                }, reason => {
                    // 只要由一个失败 就都失败
                    reject(reason);
                })
            });
        });
    }

    /**
     * 延迟执行
     * 返回一个promise，在指定的时间后才产生结果
     */

    Promise.resolveDelay = function (value, time) {

    }

     /**
     * 延迟执行
     * 返回一个promise，在指定的时间后才产生结果
     */

    Promise.rejectDelay = function (reason, time) {
        // 返回一个失败的promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason);
            }, time);
            
        })
    }
    /**
     * 对外暴露Promise
     */
    window.Promise = Promise;
})(window);