var show=document.getElementById('show'),
hide=document.getElementById('hide'),
passowrd=document.getElementById("password");

show.addEventListener('click',function(){
    passowrd.setAttribute('type',"text");
    this.style.display="none";
    hide.style.display="inline-block";
});

hide.addEventListener('click',function(){
    passowrd.setAttribute('type',"password");
    this.style.display="none";
    show.style.display="inline-block";
});