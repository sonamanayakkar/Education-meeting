const form = document.querySelector('#form')
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
   

    if(usernameval===''){
        setError(username,'First Name is required')
    }
    else
        setSuccess(username)
    if(emailval===''){
        setError(email,'enter your email')
    }
    else
        setSuccess(email)
    if(passwordval===''){
        setError(password,'enter your password')
    }
    else if(passwordval.length<8){
        setError(password,'password must be 8 character')
    }
    else
        setSuccess(password)
    if((usernameval!=='')&& (emailval!=='')&& (passwordval!==''))  {
        window.location.href="home.HTML";
    }
    else{
        alert('please fill the below content');
    }  

}
function setError(element,password){
    const formcontrol = element.parentElement;
    const errorElement = formcontrol.querySelector('.error')
    errorElement.innerText = password;
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

