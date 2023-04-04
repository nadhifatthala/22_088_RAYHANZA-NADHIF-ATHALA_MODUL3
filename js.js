function kl(){
    var harga1=document.getElementById("harga1").value=25000;
    var jum1=document.getElementById("jum1").value;
    var hasil=parseInt(harga1) * parseInt(jum1);
    var harga2=document.getElementById("harga2").value=30000;
    var jum2=document.getElementById("jum2").value;
    var hasil2=parseInt(harga2) * parseInt(jum2);
    var hasil3 = parseInt(hasil) + parseInt(hasil2);
    var diskon=document.getElementById("diskon").value;
    var hargaDisc = hasil3*(diskon / 100);
    hargaTot = hasil3 - hargaDisc
    document.getElementById("total").value = hargaTot;
}

function CL(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}
  
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide')
});