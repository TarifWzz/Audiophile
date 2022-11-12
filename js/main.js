/*Scroll up*/

let bbtn = document.getElementById("upp");

window.onscroll  = function()
{
    if(window.scrollY >= 600)
    {
      bbtn.style.display = "block";
    }
    else
    {
        bbtn.style.display = "none";
    }
}

bbtn.onclick  = function ()
{
    window.scrollTo({
        left :0,
        top: 0 ,
        behavior: "smooth"
    });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
ScrollReveal({ 
    reset: true,
     distance :'60px',
     duration:2500,
     delay:200
});

ScrollReveal().reveal('.textLan , .myhead', { delay: 500 });
ScrollReveal().reveal('.myhead , .mytext ,.info ,.links', { delay: 500 , origin:'left' });
ScrollReveal().reveal('.myhead ,.prood ,.ttx ,.audio_text', { delay: 500 , origin:'right' });
ScrollReveal().reveal('.imm , .some_one ,.contact ', { delay: 500 , origin:'top' });
ScrollReveal().reveal('.myAirphone', { delay: 500 , origin:'buttom' });