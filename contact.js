const form = document.querySelector('#form')
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const number = document.querySelector('#number');
const message = document.querySelector('#message');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const name1val = name1.value.trim();
    const name2val = name2.value.trim();
    const numberval = number.value.trim();
    const messageval = message.value.trim();

    if(name1val===''){
        setError(name1,'First Name is required')
    }
    else
        setSuccess(name1)
    if(name2val===''){
        setError(name2,'First Name is required')
    }
    else
        setSuccess(name2)
    if(numberval===''){
        setError(number,'mobile No is required')
    }
    else
        setSuccess(number)
    if(messageval===''){
        setError(message,'Please type your issue')
     }
    else
        setSuccess(message)

}
function setError(element,message){
    const formcontrol = element.parentElement;
    const errorElement = formcontrol.querySelector('.error')
    errorElement.innerText = message;
    formcontrol.classList.add('error')
    formcontrol.classList.remove('success')
}
function setSuccess(element){
    const formcontrol = element.parentElement;
    const errorElement = formcontrol.querySelector('.error')
    errorElement.innerText = '';
    formcontrol.classList.add('success')
    formcontrol.classList.remove('error')
}

function add(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var number=document.getElementById("number").value;
    var message=document.getElementById("message").value;

    if(name1 =='' || null){
        alert("invalid input");
    }
    else if(name2 =='' || null){
        alert("invalid input");
    }
    else if(number =='' || null){
        alert("invalid input");
    }
    else if(message =='' || null){
        alert("invalid input");
    }
    else{
        alert("Message send successfully");
        window.location.href="home.HTML"
    }
}
const menu=document.querySelector('.close i')
    const list=document.querySelector('.menu ul')
    
    menu.addEventListener('click',()=>{
        console.log("hi")
        list.classList.toggle('show')
})

