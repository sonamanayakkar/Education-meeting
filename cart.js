const btnCart = document.querySelector(".fa-cart-shopping");
const cart = document.querySelector(".cart");
const btnclose = document.querySelector(".fa-xmark");

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
});
btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
});

document.addEventListener('DOMContentLoaded',loadBook);

function loadBook(){
    loadContent();
}

function loadContent(){
//remove items from cart
let buttonremove = document.querySelectorAll('.fa-trash-can');
buttonremove.forEach((e)=>{
    e.addEventListener('click',removeItem)
});
//items above 0++
let qtyelements = document.querySelectorAll('.cart-quantity');
qtyelements.forEach((input)=>{
    input.addEventListener('change',a);
});

// add to cart
let cartbtn = document.querySelectorAll('.fa-solid');
cartbtn.forEach((btn)=>{
    btn.addEventListener('click',addCart);
});

}

function removeItem(){
    if(confirm('Are You Sure To Remove')){
        this.parentElement.remove();
    }

}


// from above items increement 

function a(){
    if(isNaN(this.value) || (this.value<1)){
        this.value=1;
    }
}

function addCart(){
    let book = this.parentElement;
    let title=book.querySelector('.book-title').innerHTML;
    let price=book.querySelector('.book-price').innerHTML;
    let imgsrc=book.querySelector('.book-image').src;
    let newproduct=createCartProduct(title,price,imgsrc);
    let element = document.createElement('div');
    element.innerHTML = newproduct;
    let cartbasket=document.querySelector('.cart-content');
    cartbasket.append(element);
}


function createCartProduct(title,price,imgsrc){

return `
    <div class="cart-box">
                        <img src="aptitude.jpg" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-book-title">quantitative aptitude</div>
                            <div class="price-box">
                                <div class="cart-price">Rs.430</div>
                                <div class="cart-amount">RS.430</div>
                                
                            </div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash-can"></i>
                    
                    </div>
        `;
}
