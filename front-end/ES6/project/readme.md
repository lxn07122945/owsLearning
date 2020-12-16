### ES6项目构建与基础知识
1、安装webpack
    npm installwebpack-cli--save-dev
    npm installwebpack--save-dev
    dev安装为开发环境需要、生产环境不需要的功能 save安装为生产环境需要的内容、会编译到线上代码中
    全局安装与本地安装 

2、文件目录
    ./src
    ./index.html
    ./build
    ./webpack.config.js

3、配置webpack.config.js

4、webpack --mode development   //开发模式编译文件

5、修改package.json 新增script命令

6、安装配置babel-loader、@babel/core将es6转为es5代码
    npm install babel-loader --save-dev
    npm install @babel/core --save-dev

7、 安装htmlplugin插件，将html文件输出到dist目录中作为发布文件
    npm i --save-dev html-webpack-plugin
    // webpack4不需要配置template属性


    对图片路径进行打包url-loader 
    url-loader的主要功能是：将源文件转换成DataUrl(声明文件mimetype的base64编码)
    小于limit字节，以 base64 的方式引用，大于limit就交给file-loader处理了
    file-loader的主要功能是：把源文件迁移到指定的目录（可以简单理解为从源文件目录迁移到

    npm install style-loader --save-dev
    npm install css-loader --save-dev
    style-loader

8、使用webpack的服务器，动态更新修改
    npm install webpack serve --save-dev
