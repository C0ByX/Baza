function openMenu(elem){
   let a = elem.nextElementSibling;
   if(a.classList.contains('activeInstr') || a.classList.contains('hideInstr')){
    a.classList.toggle('hideInstr');
    a.classList.toggle('activeInstr');
   }else{
    a.classList.remove("disableInstr");
    a.classList.toggle("activeInstr");
   }
    
    

}

function openHome(){
    let frame = document.querySelector("iframe"),
        c = document.querySelectorAll('.rightScreen');

    frame.remove();
    c.forEach((Element) => Element.classList.remove('disableFrm'));
}
function openDoc(elem){
    let frame = document.querySelector("iframe"),
        a = elem.getAttribute('src'),
        b = document.createElement("iframe"),
        c = document.querySelectorAll('.rightScreen');
    if(frame){
       frame.remove();
       b.src = a;
       document.querySelector('.content').appendChild(b);
    }else{
        c.forEach((Element) => Element.classList.add('disableFrm'));
        b.src = a;
        document.querySelector('.content').appendChild(b);
    } 
}
function openUrl(elem){
    window.open(elem.getAttribute('src'),"_blank")
}
