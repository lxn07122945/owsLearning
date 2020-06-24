### head
1. link 

    href：指定外链的地址
    ref: stylesheet （样式表）、shortcut icon 标签图标
    eg：
    ```
    <link rel="shortcut icon" type="image/x-icon" href="https://mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico">
    <link rel="stylesheet" href="../css/index.css">
    ```
2. title 
   
   页面标签名称
3. meta
    ```
    // 设置文件编码方式
    <meta charset="utf-8"/>
    name 属性
    name 属性提供了名称/值对中的名称。HTML 和 XHTML 标签都没有指定任何预先定义的 <meta> 名称。通常情况下，您可以自由使用对自己和源文档的读者来说富有意义的名称。
    "keywords" 是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。
    <meta name="keywords" content="HTML,ASP,PHP,SQL">
    <meta name="description" content="这是我的一个梳理文档">
    // 移动端窗口
    <meta name="viewport" content="width=device-width, initial-scale=1">
    // 告诉爬虫哪些页面需要索引
    <meta name="robots" content="none">
    //默认webkit内核
    <meta name="renderer" content="webkit"> 
    // 标注网页作者
    <meta name="author" content="lxn,821392377@qq.com">
    //代表该网站为Lxxyx个人版权所有。
    <meta name="copyright" content="lxn">
    ```

    详细说明http-equiv属性：
    作用：相当于HTTP的作用，比如说定义些HTTP参数
    主要属性：

    A. content-Type(设定网页字符集)用于设定网页字符集，便于浏览器解析与渲染页面

    B. X-UA-Compatible(浏览器采取何种版本渲染当前页面)

    ```
    //指定IE和Chrome使用最新版本渲染当前页面
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    ```
    C. cache-control(指定请求和响应遵循的缓存机制)
    ```
    <meta http-equiv="cache-control" content="no-cache">
    ```
    共有以下几种用法：

    no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。

    no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）

    public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果

    private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）

    maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。
    ```
    // 禁止转码
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    ```
    D. expires(网页到期时间)

   [1].好多属性没什么用，不再写了。具体的自己用到的时候去网上查找就可以了
4. script：引入外部脚本链接
