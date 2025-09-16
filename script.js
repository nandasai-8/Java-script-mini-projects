const qrText=document.getElementById("qrText")
const imgBox=document.getElementById("image-box")
const qrImg=document.getElementById("qrImg")
 
function getCode(){
    if(qrText.value.length>0){
         qrImg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrText.value;
    }
   
}