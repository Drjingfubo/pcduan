window.onload = function () {
    let headimg = document.querySelectorAll('.a')
    let prev = 0;
    for (let i = 0;i<headimg.length;i++){
        headimg[i].onclick = function () {
            headimg[prev].style.opacity = 0.7;
            this.style.opacity = 1;
            prev = i;
        }
    }
    let userName = document.querySelector('input[name=name]');
    let textarea = document.querySelector('textarea');
    let already = document.querySelector('#already');
    let left = document.querySelector('#left');
    let max = 200;
    already.innerText = 0;
    left.innerText = max;
    textarea.onkeyup = function () {
        let value = this.value;
        already.innerText = value.length;
        left.innerText = max - value.length;
    };
    let message = document.querySelector('.comment');
    let messageBox = document.querySelector('.last')
    let submit = document.querySelector('input[type=submit]')
    submit.onclick = function (e) {
        e.preventDefault();
        let thumbs = headimg[prev].src;
        let users = userName.value.trim();
        let time = new Date().toLocaleDateString();
        let content = textarea.value;
        let obj = {thumbs,users,time,content};
        insertMessage(obj)
    }
    function insertMessage({thumbs,users,time,content}) {
        let str = `
        <div class="comment">
        <i>
            <img src="${thumbs}" alt="fail">
        </i>
        <p>${users}</p>
        <p>${content}</p>
        <span>${time}</span>

    </div>
        `;
        messageBox.innerHTML = str + messageBox.innerHTML
    }
};