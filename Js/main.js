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

// var searchEvent = document.querySelector(".search-icon")
//     searchEvent.onclick = function(){
//         document.querySelector('.fa-magnifying-glass').classList.add('d-none')
//         document.querySelector(".search-onclick").classList.add('d-flex')
//     }
    var body = document.querySelector("body")


    const clickTarget =() => {
        body.onclick =(e) => {
            console.log(e.target.classList.value)
            if(e.target.classList.value.includes('fa-magnifying-glass') || e.target.classList.value.includes('my_check')){
                document.querySelector('.fa-magnifying-glass').classList.add('d-none');
                document.querySelector(".formSearch").classList.add('d-block');
                document.querySelector(".formSearch").classList.remove('d-none');
            }
            else {
                document.querySelector('.fa-magnifying-glass').classList.remove('d-none');
                document.querySelector(".formSearch").classList.add('d-none');
                document.querySelector(".formSearch").classList.remove('d-block');
            
            }
        }
    }
    clickTarget()


