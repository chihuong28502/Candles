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
const modalShow = document.querySelectorAll('.edit-modal')
var modalBody = document.querySelectorAll('.offcanvas')
modalShow.forEach((element, index)=>{
        element.onclick = (e)=>{
            let iconShowResponsive = e.target.children;
            let nextSibling = e.target.nextElementSibling;
            if(nextSibling.classList.contains('d-block')){
                nextSibling.classList.add('d-none')
                nextSibling.classList.remove('d-block')
                iconShowResponsive[1].classList.add('unactive')
                iconShowResponsive[1].classList.remove('active')
                iconShowResponsive[0].classList.add('active')
            }else{
                nextSibling.classList.remove('d-none')
                nextSibling.classList.add('d-block')
                iconShowResponsive[0].classList.add('unactive')
                iconShowResponsive[0].classList.remove('active')
                iconShowResponsive[1].classList.add('active')
            }
        }
    })

// var productFronts = document.querySelectorAll(".product-front");
// var productBack = document.querySelectorAll(".product-back");
//     productFronts.forEach(function(productFront, index){
//         productFront.onclick = function(e){
//             e.target.classList.add('d-none')
            
//         }
//     })

// var searchEvent = document.querySelector(".search-icon")
//     searchEvent.onclick = function(){
//         document.querySelector('.fa-magnifying-glass').classList.add('d-none')
//         document.querySelector(".search-onclick").classList.add('d-flex')
//     }
    var body = document.querySelector("body")


    const clickTarget =() => {
        body.onclick =(e) => {
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
// + - products
    const numbersQuantity = document.querySelector('#quantity');
    const addNumbersQuantity = document.querySelectorAll('.add-quantity')
    const subNumbersQuantity = document.querySelectorAll('.sub-quantity')
    var quantity = parseInt(numbersQuantity.textContent)
    
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
// 
    // click show image model
    const imgAllModel = document.querySelectorAll('.slide-product-item img')
    imgAllModel.forEach((element)=>{
        element.onclick= (item) =>{
            var src = item.target.getAttribute('src')
            document.querySelector('.img-show').innerHTML = ` <img class="w-100" src="${src}" alt="">`
            
        }
    })
// 
    const btnAddProduct = document.querySelector('.add-product');
    
    
        btnAddProduct.onclick = ()=>{
            var nameProduct = document.querySelector('.name-product').textContent;
            var sizeProduct = document.querySelector('.none-active.active-size').textContent;
            var quantityProduct = document.querySelector('#quantity').textContent;
            var bodyCart = document.querySelector('.offcanvas-body')
            bodyCart.innerHTML = bodyCart.innerHTML +`
            <div  class="cart-content w-100 mt-2">
                <div class="cart-body">
                    <div class="row justify-content-between align-items-center">
                        <p class="col-8 cart-name">${nameProduct}</p>
                        <p class="col-4 cart-size text-end pe-5">${sizeProduct}</p>
                    </div>
                    <div class="row justify-content-between align-items-center">
                        <div class="col-3">
                            <img class="w-100" src="../img/img-product/product-front.jpeg" alt="">
                        </div>
                        <div class="col-9 d-flex  justify-content-end">
                            <div class="cart-quantity d-flex align-items-center">
                                <label class="sub-quantity-cart  text-center">-</label>
                                <span id="quantity-cart" class="text-center" name="quantity" >${quantityProduct}</span>
                                <label class="add-quantity-cart  text-center b">+</label>
                            </div>
                        </div>
                    </div>
                    <p class="cart-price">390,000 VNĐ</p>
                </div>
            </div>
            `;
            const numbersQuantityCart = document.querySelector('#quantity-cart');
            const addNumbersQuantityCart = document.querySelectorAll('.add-quantity-cart')
            const subNumbersQuantityCart = document.querySelectorAll('.sub-quantity-cart')
            const numbersQuantityCartValue = document.querySelector('#quantity-cart').textContent;
            var  quantityCart = parseInt(numbersQuantityCartValue)
            addNumbersQuantityCart.forEach((element)=>{
                element.onclick = ()=>{
                    quantityCart++;
                    numbersQuantityCart.innerHTML = `${quantityCart}`;
                }
            });
            subNumbersQuantityCart.forEach((element)=>{
                element.onclick = ()=>{
                    if(quantityCart < 1){
                        quantityCart=0;
                        
                    }else{
                        quantityCart--;
                    }
                    numbersQuantityCart.innerHTML = `${quantityCart}`;
                }
                
            });
        }
//  
        // + quantity cart products
        
    // 
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
