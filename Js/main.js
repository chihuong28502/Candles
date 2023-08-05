window.onscroll = function() {scrollFunction()};
// edit bgcolor of header
function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector(".header").style.backgroundColor =  "#000";
    } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
    }
}


