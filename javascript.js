let nums = document.querySelectorAll(".box");
let section = document.querySelector(".static");
let started = false;


window.onscroll = function (){
    if (window.scrollY >= section.offsetTop - 100){
        if(!started){
            nums.forEach((num) => startcount(num));
        }
        started = true;
    }
}

function startcount(ele){
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == goal){
            clearInterval(count)
        }
    }, 2000 / goal);
}

// startcount(document.querySelectorAll(".box")[0]);
// startcount(document.querySelectorAll(".box")[1]);
// startcount(document.querySelectorAll(".box")[2]);
// startcount(document.querySelectorAll(".box")[3]);