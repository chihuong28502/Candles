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
    
    
    
    // tăng số lượng sản phẩm
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
    // + - products
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

// click show image model
    const imgAllModel = document.querySelectorAll('.slide-product-item img')
    imgAllModel.forEach((element)=>{
        element.onclick= (item) =>{
            var src = item.target.getAttribute('src')
            document.querySelector('.img-show').innerHTML = ` <img class="w-100" src="${src}" alt="">`
            
        }
    })