
function emailCorrection(e){
    e.preventDefault();
    let emailValue=document.querySelector('.formInput').value;
    if(emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)!==null){
        console.log('email address is valid');
    }else{
        let emailInput=document.querySelector('.formInput');
        let warning=document.querySelector('.warning');
        let emailDiv=document.querySelector('.email');
        warning.innerHTML="Please provide a valid email address";
        emailDiv.insertAdjacentElement('beforeend',warning);
        emailInput.style.border="1px solid hsl(354, 100%, 66%)";
        emailInput.style.color="var(--darkBlue)";
    }
}


document.querySelector('.formInput').addEventListener('input',()=>{
    document.querySelector('.button').addEventListener('click',emailCorrection);
});















