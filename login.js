const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');


form.addEventListener('submit',(event)=>{
 event.preventDefault()
 checkInputs();
})


var checkInputs=()=>{

 const usernameValue=username.value.trim();
 const emailValue = email.value.trim();
 const password1Value = password1.value.trim();
 const password2Value = password2.value.trim();

  //  dynamic handling for the username field

 if (usernameValue === ''){
  setErrorFor(username,'username cannot be blank');
 }
 else if (!isuserName(usernameValue)) {
   setErrorFor(username, "username is not valid");
 }
 else{
      setSuccessFor(username);
 }
  

    
      //  dynamic handling of the gmail field
 if (emailValue === "") {
   setErrorFor(email, "email cannot be be blank");
   

 } else if (!isEmail(emailValue)) {
   setErrorFor(email, "email is not valid");
     console.log(setErrorFor(email, "email is not valid"));
 } else {
   setSuccessFor(email);
 }





  //  dynamic handling of the password1 field
 if(password1Value ===''){
  setErrorFor(password1,'password cannot be blank')
 }

 else if (!isPassWord1(password1Value)){
   setErrorFor(password1, "password must contain atleast 7 characters");
 }

 else{
  setSuccessFor(password1)
 }






 if (password2Value === "") {
   setErrorFor(password2, "password cannot be blank");
 } 
 else if (!isPassWord2(password2Value)) {
   setErrorFor(password2, "password must contain atleast 7 characters");
 }
   else if(password1Value !== password2Value){
         setErrorFor(password2,'passwords does not match')
   }
 else {
   setSuccessFor(password2);
 }





}





const setErrorFor=(input,message)=>{

const formControl=input.parentElement; //to target the class form-control
const small=formControl.querySelector('small') ; // to target the small tag

small.innerText=message;

formControl.className = 'form-control error';

console.log(formControl)

}


const setSuccessFor=(input)=>{

 const formControl=input.parentElement;
 formControl.className = 'form-control success';

 console.log(formControl);


}



const isEmail=(email)=>{
  return /^([a-z\d\.-]+)@([a-z\d]+).([a-z]{2,6})(\.[a-z\d]{2,6}?)$/.test(email);  //the regular expression to test for the email
}

const isuserName=(username)=>{
  return/^([a-z A-Z\d\.+-]+)$/.test(username); //the regular expression for the  username
}


const isPassWord1=(password1)=>{
  return /^([a-z A-Z\w\.+-]{7,20})$/.test(password1);
}


const isPassWord2=(password2)=>{
  return /^([a-z A-Z\w\.+-]{7,20})$/.test(password2);
}