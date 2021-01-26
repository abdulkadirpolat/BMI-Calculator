const message = document.querySelector('.alert-Message')
const size = document.querySelector('#size')
const weight =document.querySelector('#weight')
const btn = document.querySelector('button') 
 function eventListener(){
    
  btn.addEventListener('click',cal)   
 }
 eventListener();
function cal (e){
const cm=   size.value
const kg=   weight.value
 
if((cm==='')&& (kg==='') ){
  alert('Lütfen geçerli bir değer giriniz!') 
}
else if((cm>250)  || (cm<80) ){
  alert('Uyumlu bir değer giriniz!') 
}
else if((kg>350) || (kg<40) ){
  alert('Uyumlu bir değer giriniz!') 
}


else if(((cm>100) && (cm<220)) && ((kg>40) && (kg<400))  ){
  const valueUI=kg/((cm/100 )*(cm/100 ))
   valueUIV(valueUI.toFixed(1))
  
}
 e.preventDefault();
} 
 
function   valueUIV(valueUI){
  
    const newElement = document.createElement('div');
     
    newElement.className='alert-success';
    newElement.appendChild(document.createTextNode(valueUI+' BMI'));
   message.appendChild(newElement);
   setTimeout(function(){
    newElement.remove();
     },5000) 
  size.value=''
  weight.value=''   
}