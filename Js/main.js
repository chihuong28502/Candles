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
            // console.log(e.target.classList.value)
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
    // choice Size
    const clickSize = document.querySelectorAll('.none-active')
    const clickSizeLength = clickSize.length;
    clickSize.forEach((element)=>{
        element.onclick = (click)=>{
                let removeSelectSize = document.querySelector('.none-active.active-size')
                removeSelectSize.classList.remove('active-size')
                click.target.classList.add('active-size')
            }
        
    });

    const numbersQuantity = document.querySelector('#quantity');
    const numbersQuantityValue = document.querySelector('#quantity').textContent;
    
    const addNumbersQuantity = document.querySelectorAll('.add-quantity')
    const subNumbersQuantity = document.querySelectorAll('.sub-quantity')
    var quantity = parseInt(numbersQuantityValue)
    
    addNumbersQuantity.forEach((element)=>{
        
        element.onclick = ()=>{
            quantity++;
            numbersQuantity.innerHTML = `${quantity}`;
        }
        
    });
    subNumbersQuantity.forEach((element)=>{
        element.onclick = ()=>{
            if(quantity < 1){
                quantity=0;
                
            }else{
                quantity--;
            }
            numbersQuantity.innerHTML = `${quantity}`;
        }
        
    });
    

    // addNumbersQuantity.onclick = ()=>{
    //     var quantity = parseInt(numbersQuantityValue)
    //     quantity.forEach(()=>{

    //         quantity++;
            
    //         numbersQuantity.innerHTML = `${quantity}`
    //     })
        
    // }
    // $('.add-quantity').click(function(){
    //         var quantity = $(this).siblings('span').text();
    //         quantity = parseInt(quantity)+1;
    //         $(this).siblings('span').text(quantity);
        
    // })
    // $('.sub-quantity').click(function(){
    //     var quantity = $(this).siblings('span').text();
    //     if(quantity <1){
    //         quantity = 0
    //     }else{
    //         quantity = parseInt(quantity)-1;
    //     }
    //     $(this).siblings('span').text(quantity);
    
    // })
    
// 
    // 
    // {
    //     clickSize[i].onclick = (e)=>{
    //         let removeSelectSize = document.querySelector('.none-active.active-size')
    //         removeSelectSize.classList.remove('active-size')
    //         e.target.classList.add('active-size')
    //     }
    // }


    
    // render products list
//     var listProducts = [
//         {
//             id : 1,
//             name :"Candles Spray Tshift",
//             ImageFront: "../img/product-front1.jpeg",
//             ImageBackend: "../img/product-backend1.jpeg",
//             price: 390000
//         },
//         {
//             id : 2,
//             name :"Candles Around Tshirt",
//             ImageFront: "../img/product-front2.jpeg",
//             ImageBackend: "../img/product-backend2.jpeg",
//             price: 390000
//         },
//         {
//             id : 3,
//             name :"Candles Roulette Short",
//             ImageFront: "../img/product-front3.jpeg",
//             ImageBackend: "../img/product-backend3.jpeg",
//             price: 390000
//         },
//         {
//             id : 4,
//             name :"Candles Spray Tshift",
//             ImageFront: "../img/product-front1.jpeg",
//             ImageBackend: "../img/product-backend1.jpeg",
//             price: 390000
//         },
//         {
//             id : 5,
//             name :"Candles Around Tshirt",
//             ImageFront: "../img/product-front2.jpeg",
//             ImageBackend: "../img/product-backend2.jpeg",
//             price: 390000
//         },
//         {
//             id : 6,
//             name :"Candles Roulette Short",
//             ImageFront: "../img/product-front3.jpeg",
//             ImageBackend: "../img/product-backend3.jpeg",
//             price: 390000
//         },
//         {
//             id : 7,
//             name :"Candles Spray Tshift",
//             ImageFront: "../img/product-front1.jpeg",
//             ImageBackend: "../img/product-backend1.jpeg",
//             price: 390000
//         },
//         {
//             id : 8,
//             name :"Candles Around Tshirt",
//             ImageFront: "../img/product-front2.jpeg",
//             ImageBackend: "../img/product-backend2.jpeg",
//             price: 390000
//         },
//         {
//             id : 9,
//             name :"Candles Roulette Short",
//             ImageFront: "../img/product-front3.jpeg",
//             ImageBackend: "../img/product-backend3.jpeg",
//             price: 390000
//         },
//         {
//             id : 10,
//             name :"Candles Spray Tshift",
//             ImageFront: "../img/product-front1.jpeg",
//             ImageBackend: "../img/product-backend1.jpeg",
//             price: 390000
//         },
//         {
//             id : 11,
//             name :"Candles Around Tshirt",
//             ImageFront: "../img/product-front2.jpeg",
//             ImageBackend: "../img/product-backend2.jpeg",
//             price: 390000
//         },
//         {
//             id : 12,
//             name :"Candles Roulette Short",
//             ImageFront: "../img/product-front3.jpeg",
//             ImageBackend: "../img/product-backend3.jpeg",
//             price: 390000
//         },
//         {
//             id : 13,
//             name :"Candles Spray Tshift",
//             ImageFront: "../img/product-front1.jpeg",
//             ImageBackend: "../img/product-backend1.jpeg",
//             price: 390000
//         },
//         {
//             id : 14,
//             name :"Candles Around Tshirt",
//             ImageFront: "../img/product-front2.jpeg",
//             ImageBackend: "../img/product-backend2.jpeg",
//             price: 390000
//         },
//         {
//             id : 15,
//             name :"Candles Roulette Short",
//             ImageFront: "../img/product-front3.jpeg",
//             ImageBackend: "../img/product-backend3.jpeg",
//             price: 390000
//         }
//     ];
    
//     function setupHtml(arr){
//         var view = `
//         <div class="list-product-item col-3">
//             <div class="m-5 col product-item">
//                 <div class="product-img">
//                     <img class="w-100 product-front" src="${arr.ImageFront}" alt="">
//                     <img class="w-100 product-back d-none" src="${arr.ImageBackend}" alt="">
//                 </div>
//                 <div class="product-description">
//                     <h3>${arr.name}</h3>
//                     <p><span>${arr.price}</span></p>
//                 </div>
//             </div>
//             <div class="m-5 col product-item">
//                 <div class="product-img">
//                     <img class="w-100 product-front" src="${arr.ImageFront}" alt="">
//                     <img class="w-100 product-back d-none" src="${arr.ImageBackend}" alt="">
//                 </div>
//                 <div class="product-description">
//                     <h3>${arr.name}</h3>
//                     <p><span>${arr.price}</span></p>
//                 </div>
//             </div>
//             <div class="m-5 col product-item">
//                 <div class="product-img">
//                     <img class="w-100 product-front" src="${arr.ImageFront}" alt="">
//                     <img class="w-100 product-back d-none" src="${arr.ImageBackend}" alt="">
//                 </div>
//                 <div class="product-description">
//                     <h3>${arr.name}</h3>
//                     <p><span>${arr.price}</span></p>
//                 </div>
//             </div>
//         </div>
//         `
//         $('.product-list').append(view)
//     }
//     function renderHtml(){
//         for(var i = 0; i <listProducts.length; i++){
//             setupHtml(listProducts[i])
//         }
//     }
// renderHtml()
