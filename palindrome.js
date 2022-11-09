const botun = document.getElementById("botun");
const ispis=document.getElementById("rezultat");
const unos= document.getElementById("pali");


botun.onclick=function () {
    var re = /[\W_]/g;
         var lowRegStr = unos.value.toLowerCase().replace(re, '');
         var reverseStr = lowRegStr.split('').reverse().join(''); 
         if(reverseStr===lowRegStr){
            ispis.innerHTML=`<p>Tekst je palindrom.</p>`;
         }
         else{
            ispis.innerHTML=`<p>Tekst nije palindrom.</p>`;
       }
}


  