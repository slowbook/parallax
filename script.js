let text=document.getElementById('text');
let tl=document.getElementById('tl');
let tr=document.getElementById('tr');
let gl=document.getElementById('gl');
let gr=document.getElementById('gr');

window.addEventListener('scroll',() =>{
    let value=window.scrollY;
    text.style.marginTop = value *1.2 + 'px' ;
    tl.style.marginLeft= -value + 'px';
    tr.style.marginLeft= value + 'px';
    gl.style.marginLeft= value*0.5 + 'px';
    gr.style.marginLeft= -value*0.5 + 'px';
   

});