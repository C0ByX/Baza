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
function openDoc(elem){
    let frame = document.querySelector("iframe"),
        a = elem.getAttribute('src'),
        b = document.createElement("iframe"),
        c = document.querySelector('.baza');
    if(frame){
       frame.remove();
       b.src = a;
       document.querySelector('.content').appendChild(b);
    }else{
        c.remove();
        b.src = a;
        document.querySelector('.content').appendChild(b);
    } 
}
function openUrl(elem){
    window.open(elem.getAttribute('src'),"_blank")
}
