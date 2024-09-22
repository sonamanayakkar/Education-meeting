const opencart=document.querySelector(".fa-cart-shopping");
const closecart=document.querySelector(".end");
const incre=document.querySelector(".plus");
const decre=document.querySelector(".minus");
const incre1=document.querySelector(".plus1");
const decre1=document.querySelector(".minus1");
const incre2=document.querySelector(".plus2");
const decre2=document.querySelector(".minus2");
const incre3=document.querySelector(".plus3");
const decre3=document.querySelector(".minus3");
const incre4=document.querySelector(".plus4");
const decre4=document.querySelector(".minus4");
const incre5=document.querySelector(".plus5");
const decre5=document.querySelector(".minus5");

const addcart=document.querySelector("button");
const deletecart=document.querySelector("#t1");

const addcart2=document.querySelector(".button2");
const deletecart2=document.querySelector("#t2");

const addcart3=document.querySelector(".button3");
const deletecart3=document.querySelector("#t3");

const addcart4=document.querySelector(".button4");
const deletecart4=document.querySelector("#t4");

const addcart5=document.querySelector(".button5");
const deletecart5=document.querySelector("#t5");

const addcart6=document.querySelector(".button6");
const deletecart6=document.querySelector("#t6");


opencart.addEventListener('click', ()=>{
    document.querySelector(".slide").style.display="block";
})
closecart.addEventListener('click', ()=>{
    document.querySelector(".slide").style.display="none";
})
//1
incre.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty").innerHTML;
    qty++;
    document.querySelector("#qty").innerHTML=qty;

    let price=600;
    let cal=qty*price;
    document.querySelector(".price").innerHTML= "$"+cal;
    updateTotal();
})

decre.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty").innerHTML=qty;
        let price=600;
        let cal2=price*qty;
        document.querySelector(".price").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//2
incre1.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty1").innerHTML;
    qty++;
    document.querySelector("#qty1").innerHTML=qty;

    let price=350;
    let cal=qty*price;
    document.querySelector(".price1").innerHTML= "$"+cal;
    updateTotal();
})

decre1.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty1").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty1").innerHTML=qty;
        let price=350;
        let cal2=price*qty;
        document.querySelector(".price1").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//3
incre2.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty2").innerHTML;
    qty++;
    document.querySelector("#qty2").innerHTML=qty;

    let price=420;
    let cal=qty*price;
    document.querySelector(".price2").innerHTML= "$"+cal;
    updateTotal();
})

decre2.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty2").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty2").innerHTML=qty;
        let price=420;
        let cal2=price*qty;
        document.querySelector(".price2").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//4
incre3.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty3").innerHTML;
    qty++;
    document.querySelector("#qty3").innerHTML=qty;

    let price=1200;
    let cal=qty*price;
    document.querySelector(".price3").innerHTML= "$"+cal;
    updateTotal();
})

decre3.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty3").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty3").innerHTML=qty;
        let price=1200;
        let cal2=price*qty;
        document.querySelector(".price3").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//5
incre4.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty4").innerHTML;
    qty++;
    document.querySelector("#qty4").innerHTML=qty;

    let price=800;
    let cal=qty*price;
    document.querySelector(".price4").innerHTML= "$"+cal;
    updateTotal();
})

decre4.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty4").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty4").innerHTML=qty;
        let price=800;
        let cal2=price*qty;
        document.querySelector(".price4").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//6
incre5.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty5").innerHTML;
    qty++;
    document.querySelector("#qty5").innerHTML=qty;

    let price=600;
    let cal=qty*price;
    document.querySelector(".price5").innerHTML= "$"+cal;
    updateTotal();
})

decre5.addEventListener('click',()=>{
    
    let qty=document.querySelector("#qty5").innerHTML;
    qty--;
    if (qty>=0) {
        document.querySelector("#qty5").innerHTML=qty;
        let price=600;
        let cal2=price*qty;
        document.querySelector(".price5").innerHTML="$"+cal2;
    }
    else{}
    updateTotal();
})
//1
addcart.addEventListener('click',()=>{
    document.querySelector(".slide .cart1").style.display="flex";
})

deletecart.addEventListener('click',()=>{
    document.querySelector(".slide .cart1").style.display="none";
    
})
//2
addcart2.addEventListener('click',()=>{
    document.querySelector(".slide #cart2").style.display="flex";
})

deletecart2.addEventListener('click',()=>{
    document.querySelector(".slide #cart2").style.display="none";
    
})
//3
addcart3.addEventListener('click',()=>{
    document.querySelector(".slide #cart3").style.display="flex";
})

deletecart3.addEventListener('click',()=>{
    document.querySelector(".slide #cart3").style.display="none";
})
//4
addcart4.addEventListener('click',()=>{
    document.querySelector(".slide #cart4").style.display="flex";
})

deletecart4.addEventListener('click',()=>{
    document.querySelector(".slide #cart4").style.display="none";
})
//5
addcart5.addEventListener('click',()=>{
    document.querySelector(".slide #cart5").style.display="flex";
})

deletecart5.addEventListener('click',()=>{
    document.querySelector(".slide #cart5").style.display="none";
})
//6
addcart6.addEventListener('click',()=>{
    document.querySelector(".slide #cart6").style.display="flex";
})

deletecart6.addEventListener('click',()=>{
    document.querySelector(".slide #cart6").style.display="none";
})

function updateTotal(){
    let amount1=parseFloat(document.querySelector(".price").innerText.replace('$','')) || 0;
    let amount2=parseFloat(document.querySelector(".price1").innerText.replace('$','')) || 0;
    let amount3=parseFloat(document.querySelector(".price2").innerText.replace('$','')) || 0;
    let amount4=parseFloat(document.querySelector(".price3").innerText.replace('$','')) || 0;
    let amount5=parseFloat(document.querySelector(".price4").innerText.replace('$','')) || 0;
    let amount6=parseFloat(document.querySelector(".price5").innerText.replace('$','')) || 0;

    let neg1=amount3+amount2+amount4+amount5+amount6;
    let neg2=amount1+amount3+amount4+amount5+amount6;
    let neg3=amount1+amount2+amount4+amount5+amount6;
    let neg4=amount2+amount3+amount1+amount5+amount6;
    let neg5=amount2+amount3+amount4+amount1+amount6;
    let neg6=amount2+amount3+amount4+amount5+amount1;
    let totalamt=amount1+amount2+amount3+amount4+amount5+amount6;

    deletecart.addEventListener('click',()=>{
        document.querySelector(".slide .cart1").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+totalamt;
    })
    deletecart2.addEventListener('click',()=>{
        document.querySelector(".slide #cart2").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+amount1;
    })
    deletecart3.addEventListener('click',()=>{
        document.querySelector(".slide #cart3").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+neg3;
    })
    deletecart4.addEventListener('click',()=>{
        document.querySelector(".slide #cart4").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+neg4;
    })
    deletecart5.addEventListener('click',()=>{
        document.querySelector(".slide #cart5").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+neg5;
    })
    deletecart6.addEventListener('click',()=>{
        document.querySelector(".slide #cart6").style.display="none";
        document.querySelector(".total").innerText="total amount:$"+neg6;
    })
    document.querySelector(".total").innerText="total amount:$"+totalamt;


    
}
    
