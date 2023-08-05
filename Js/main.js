window.onscroll = function() {scrollFunction()};
var listNav = document.querySelectorAll(".subnav-list");
// edit bgcolor of header
function scrollFunction() {
    let arrLength = listNav.length;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".header").style.backgroundColor =  "#000"; 
    for(var i = 0; i < arrLength; i++) {
            listNav[i].style.backgroundColor =  "#000";
        }
    } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
    for(var i = 0; i < arrLength; i++) {
        listNav[i].style.backgroundColor =  "transparent";
    }
    }
}

var productFronts = document.querySelectorAll(".product-front");
var productBack = document.querySelectorAll(".product-back");
    // productFronts.forEach(function(productFront, index){
    //     productFront.onclick = function(e){
    //         e.target.classList.add('d-none')
            
    //     }
    // })
    


