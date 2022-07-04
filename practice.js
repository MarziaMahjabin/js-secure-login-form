
document.querySelector("#email").addEventListener("keyup" , function () {

  var getValue= this.value;

   if (getValue=="" ) {

          document.querySelector("#pwd").setAttribute("disabled", "disabled");


   }

   if (getValue!="" && getValue.length > 5 && getValue.includes("@")) {

     document.querySelector("#pwd").removeAttribute("disabled");

   }

});

document.querySelector("#email").addEventListener("focusout" , function () {

  var getValue= this.value;

  if(getValue=="") {

    document.querySelector("#pwd").setAttribute("disabled", "disabled");

  }


});





document.querySelector("#pwd").addEventListener("keyup" , function (){

  document.querySelector("#myProgress").style.width="150px";

  var pass= this.value;

  if(pass==""){

    document.querySelector("#myProgress").style.width="0px";

  };

  function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);

}



if(scorePassword(pass) < 30 ){

  document.querySelector("#myBar").setAttribute("style","width: " + scorePassword(pass) + "%;background:red");
  document.querySelector("#display").innerHTML="Weak";
  document.querySelector("#display").style.color="gray";
  document.querySelector("#myProgress").style.height="18px";
  document.querySelector(".jslogin").style.height="365px";

}else if(scorePassword(pass) < 60 && scorePassword(pass) > 30){

  document.querySelector("#myBar").setAttribute("style","width: " + scorePassword(pass) + "%;background:yellow");
  document.querySelector("#display").innerHTML="Mediume";
  document.querySelector("#display").style.color="gray";

}else if(scorePassword(pass) > 80 && scorePassword(pass) > 60){

  document.querySelector("#myBar").setAttribute("style","width: " + scorePassword(pass) + "%;background:green;max-width:100%");
  document.querySelector("#display").innerHTML="Strong";
  document.querySelector("#display").style.color="white";

}





});



document.querySelector("#generate").addEventListener("click" , function (){

  document.querySelector("#myProgress").style.width="150px";
  document.querySelector("#myBar").setAttribute("style","width:100%;background:green;max-width:100%");
  document.querySelector("#display").innerHTML="Strong";
  document.querySelector("#display").style.color="white";
  document.querySelector("#myProgress").style.height="18px";
  document.querySelector(".jslogin").style.height="365px";


  document.querySelector("#pwd").value= generateP();



});



//RegExp

document.querySelector("#email").addEventListener("focusout" , function () {

  var getValue= this.value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var result= re.test(String(getValue).toLowerCase());



 if(result== false){
   document.querySelector("#error").innerHTML= "Invalid e-mail";
   document.querySelector("#pwd").setAttribute("disabled", "disabled");
   document.querySelector("#error").style.marginTop="13px";
   document.querySelector("#error").style.color="#af0000";
   document.querySelector(".jslogin").style.height="400px";

 }else{

   document.querySelector("#error").innerHTML= "";
    document.querySelector("#pwd").removeAttribute("disabled");



 }
});
