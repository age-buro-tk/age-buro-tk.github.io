var holder = document.querySelectorAll(`[data-joy]`);

function typeWriter(e, s) {
  e.innerHTML=``;
  var ss=``;
  var i=0;
  var typeW = function(e,ss,i){
   if(i<s.length){
    setTimeout(function(){
      ss+=s[i];e.innerHTML=ss;typeW(e,ss,i+1)
      },
      300)
   }else{
    ss=``;i=0;typeW(e,ss,i)
   }
  };
  typeW(e,ss,i);
}

typeWriter(holder.item(0), holder.item(0).innerHTML);
typeWriter(holder.item(1), holder.item(1).innerHTML);
