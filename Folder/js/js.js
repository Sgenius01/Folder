document.getElementById("navbtn").addEventListener('click',function(){
    document.getElementById("contentnav").classList.add("nav-act");
});

document.getElementById("closebtn").addEventListener('click',function(){
    document.getElementById("contentnav").classList.remove("nav-act");
});