let body = document.getElementsByTagName('body');
let div = document.createElement('div');
div.innerHTML = '异步编程与promise';
div.setAttribute('class', 'title');
body[0].appendChild(div);

/**
 * setTimeout
 */

function now () {
    return 21;
}

 function later () {
     console.log(answer * 2);
 };

 var answer = now();
 setTimeout(later, 1000);

 /**
  * promise
  */

const staticSrc  = `http://api.map.baidu.com/panorama/v2?ak=FDQ7MYun6IydINVlh6G4Ic61E23OXv4a&width=512&height=256&location=116.313393,40.04778&fov=180`;
const staticSrc2  = `http://api.map.baidu.com/panorama/v2?ak=FDQ7MYun6IydINVlh6G4Ic61E23OXv4a&width=513&height=256&location=116.313393,40.04778&fov=180`;
const staticSrc3  = `http://api.map.baidu.com/panorama/v2?ak=FDQ7MYun6IydINVlh6G4Ic61E23OXv4a&width=514&height=256&location=116.313393,40.04778&fov=180`;

const imgpromis = url => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(new Error('图片有误'));
        }
    });
};
const p1 = imgpromis(staticSrc);
    // p1.then(img => {
    //     document.body.appendChild(img);
    // })
    // .catch(err => {
    //     document.body.innerHTML = err;
    // });

const p2 = imgpromis(staticSrc2);
const p3 = imgpromis(staticSrc3);

// const pAll = Promise.all([p1, p2, p3]);
// pAll.then(res => {
//     console.log(res);
// });

const pRace = Promise.race([p1, p2, p3]);
pRace.then(res => {
    console.log(res);
});


/**
 * async 与await
 */

async function f1 () {
    let img = await imgpromis(staticSrc);
    console.log(img);
    console.log('abc');
}

async function f2 () {
    // throw 3
    // return Promise.reject(3);
    // return 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 4000)
    });
};
const value2 = f2();

value2.then(
    value => {
        console.log('onResolved', value);
    },
    reason => {
        console.log('onReject', reason);
    }
)


// await
function f3 () {
    // throw 3
    // return Promise.reject(3);
    // return 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(6)
        }, 4000)
    });
};

async function fn3 () {
    try {
        const fn = await f3();
    }
    catch (err) {
        const fn = err;
        console.log(fn);

    }
}

fn3();
