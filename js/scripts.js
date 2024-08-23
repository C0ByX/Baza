window.onload = function (){
    window.heightMenu = document.querySelector('.menuZag').clientHeight;
    window.innerWidth <= 1024 ? document.querySelector('.content').style.marginTop = heightMenu : '';
    
    
     
}

function openMenu(elem){
    let a = elem.nextElementSibling;
     if(window.innerWidth <= 1024){
         if(a.classList.contains('activeInstr') || a.classList.contains('hideInstr')){
             a.classList.toggle('hideInstr');
             a.classList.toggle('activeInstr');
             elem.classList.toggle('h2Col');
         }else{
             a.classList.remove("disableInstr");
             a.classList.toggle("activeInstr");
             elem.classList.toggle('h2Col');
         }
     }else{
         if(a.classList.contains('activeInstr') || a.classList.contains('hideInstr')){
             a.classList.toggle('hideInstr');
             a.classList.toggle('activeInstr');
             elem.classList.toggle('h2Col');
         }else{
             a.classList.remove("disableInstr");
             a.classList.toggle("activeInstr");
             elem.classList.toggle('h2Col');
         }
     }
   
 }
 
 function openHome(){
     let frame = document.querySelector("iframe"),
         a = document.querySelector('.activeItemDoc'),
         b = document.querySelector('.menuList'),
         c = document.querySelectorAll('.rightScreen');
        console.log(heightMenu);
     if(window.innerWidth <= 1024){
        if (b.style.height === "0px") {
            b.style.height = `${ b.scrollHeight }px`
        } else {
            b.style.height = `${ b.scrollHeight }px`;
            window.getComputedStyle(b, null).getPropertyValue("height");
            b.style.height = "0";
        }
        b.addEventListener("transitionend", () => {
            if (b.style.height !== "0px") {
                b.style.height = "auto"
            }
        });
         
     }else{
         if(frame){
             frame.remove();
             c.forEach((Element) => Element.classList.remove('disableFrm'));
             a ? a.classList.remove('activeItemDoc'): '';
             
         }else{
             c.forEach((Element) => Element.classList.remove('disableFrm'));
             a ? a.classList.remove('activeItemDoc'): '';
         }
     }
         
     
 }
 function openDoc(elem){
     let frame = document.querySelector("iframe"),
         a = elem.getAttribute('src'),
         b = document.createElement("iframe"),
         c = document.querySelectorAll('.rightScreen'),
         d = document.querySelector('.activeItemDoc');
         if(d){
             d.classList.remove('activeItemDoc');
             elem.classList.add('activeItemDoc');
         }else{
             elem.classList.add('activeItemDoc');
         }
         
         
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


