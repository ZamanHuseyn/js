let metn = prompt("Metni daxil edin");
let number = false;
for (let i= 0; i <metn.length; i++){
  if (!isNaN(metn[i]) && metn[i]!== " "){
    number = true
    break;
  }
}
if (number){
console.log("reqem var");
}else{
  console.log("reqem yoxdur");
}