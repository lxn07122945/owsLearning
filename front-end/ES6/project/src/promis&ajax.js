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

imgpromis(staticSrc)
    .then(img => {
        document.body.appendChild(img);
    })
    .catch(err => {
        document.body.innerHTML = err;
    });

/**
 * async 与await
 */

async function f1 () {
    let img = await imgpromis(staticSrc);
    console.log(img);
    console.log('abc');
}
console.log(f1());