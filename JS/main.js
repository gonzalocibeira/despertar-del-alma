const scrollDownIcon = document.querySelector("#scrollDown");

function scrollDown(){
    scrollDownIcon.classList.remove("fa-angle-double-down");
    scrollDownIcon.classList.add("fa-angle-down");
    setTimeout(function(){
        scrollDownIcon.classList.remove("fa-angle-down");
        scrollDownIcon.classList.add("fa-angle-double-down");
    },500);
};

scrollDown();
setInterval(scrollDown, 1000);
