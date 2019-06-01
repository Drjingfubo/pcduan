
window.onload=function () {
    let home = document.getElementById('home')
    home.onmouseenter = function () {
        home.style.color = 'cyan';
    }
    home.onmouseleave = function () {
        home.style.color = 'white'
    }

    let firstList = document.getElementsByClassName('firstList')
    let list = firstList[0].getElementsByTagName('li')
    for (let i = 0; i < list.length; i++) {
        list[i].onmouseover = function () {
            for (let j = 0; j < list.length; j++) {
                list[j].className = 'none'
            }
            list[i].className = 'be'
        }
    }
    //使文字显示出来
    let tablelist = document.getElementsByClassName('tablelist')
    console.log(tablelist);
    let li = tablelist[0].getElementsByTagName('li')
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            for (let j = 0; j < list.length; j++) {
                li[j].className = ''
            }
            li[i].className = 'hot'
        }
    }
    //第二种方法
    // let tablelist = document.querySelector('.tablelist > li');
    // let tablists = document.querySelectorAll('.tablelist > li');
    // tablists.forEach(function (elem,index) {
    //     elem.onmouseenter = function () {
    //         for (let i= 0 ;i<tablists.length;i++){
    //             tablists[i].classList.remove('hot')
    //         }
    //         this.classList.add('hot')
    //     }
    //
    // })
    //四个按钮
    let xuanzebut = document.getElementsByClassName('xuanzebutton')
    let bannerPointer = xuanzebut[0].getElementsByTagName('li')
//    轮播图
//     let index = 0;
    let current =0,next = 0;
    let rightBth = document.querySelector('.rightBth')
    let firstimg = document.querySelectorAll('.firstimg > li')
    let leftBth = document.querySelector('.leftBth')
    let w = firstimg[0].offsetWidth;
    let flag = true;
    rightBth.onclick = function(){
        if (!flag){
            return
        }
        flag = false;
        next++;
        if (next == firstimg.length){
            next = 0;
        }
        firstimg[next].style.left =w+'px';
        animate(firstimg[current],{left:-w});
        animate(firstimg[next],{left:0},function() {
            flag = true
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current = next
    }
    leftBth.onclick = function(){
        if (!flag){
            return
        }
        flag = false;
        next--;
        if (next < 0){
            next = firstimg.length-1;
        }
        firstimg[next].style.left =-w+'px';
        animate(firstimg[current],{left:w});
        animate(firstimg[next],{left:0},function () {
            flag = true
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current = next
    };
    // rightBth.onclick = function () {
    //     index++;
    //     if (index == firstimg.length) {
    //         index = 0;
    //     }
    //     firstimg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     Array.prototype.forEach.call(bannerPointer,function (ele) {
    //         ele.classList.remove('hot')
    //     });
    //     console.log(index);
    //     bannerPointer[index].classList.add('hot')
    //     firstimg[index].style.zIndex = 10;
    // }
    // leftBth.onclick = function () {
    //     index--;
    //     if (index< 0) {
    //         index = firstimg.length-1;
    //     }
    //     firstimg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //         elem.classList.remove('hot')
    //     });
    //     bannerPointer[index].classList.add('hot')
    //     firstimg[index].style.zIndex = 10;
    // }
    //轮播图的移入和移出
    let first = document.querySelector('.first');
    let t = setInterval(rightBth.onclick,3000);
    first.onmouseenter=function () {
        clearInterval(t);
        leftBth.style.opacity = '0.9';
        rightBth.style.opacity= '0.9'
    };
    first.onmouseleave = function () {
        t= setInterval(rightBth.onclick,3000);
        leftBth.style.opacity = '0';
        rightBth.style.opacity= '0'
    };
    for (let i= 0;i<bannerPointer.length;i++){
        bannerPointer[i].onclick = function () {
            if (!flag){
                return
            }
            if (current === i){
                return
            }
            flag = false
            next = i;
            if (next>current){
                firstimg[next].style.left =w+'px';
                animate(firstimg[current],{left:-w});
                animate(firstimg[next],{left:0},function () {
                    flag = true
                });
            }else{
                firstimg[next].style.left =-w+'px';
                animate(firstimg[current],{left:w});
                animate(firstimg[next],{left:0},function () {
                    flag = true
                });
            }
            bannerPointer[current].classList.remove('hot');
            bannerPointer[next].classList.add('hot');
            current = next
        }
    }
    // for (let i=0;i<bannerPointer.length;i++) {
    //     bannerPointer[i].onclick = function(){
    //         index = i;
    //         Array.prototype.forEach.call(bannerPointer,function (ele) {
    //             ele.classList.remove('hot')
    //         });
    //         firstimg.forEach(function (ele) {
    //             ele.style.zIndex = 1;
    //         });
    //         bannerPointer[i].classList.add('hot')
    //         console.log(i);
    //         firstimg[i].style.zIndex = 10;
    //     }
    // }
    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop
        for (let i =0;i<positionArr.length;i++){
            if (scrolltop + viewH >= positionArr[i]){
                if (!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa')
                }
            }
        }
    }

}


