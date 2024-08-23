window.onload = function (){
    window.heightMenu = document.querySelector('.menuZag').clientHeight;
    window.innerWidth <= 1024 ? document.querySelector('.content').style.marginTop = heightMenu : '';
    
    
     
}

function openMenu(elem){
    let a = elem.nextElementSibling;
    if (a.style.height === "0px") {
        a.style.height = `${ a.scrollHeight }px`
    } else {
        a.style.height = `${ a.scrollHeight }px`;
        window.getComputedStyle(a, null).getPropertyValue("height");
        a.style.height = "0";
    }
    a.addEventListener("transitionend", () => {
        if (a.style.height !== "0px") {
            a.style.height = "auto"
        }
    });
        elem.classList.toggle('h2Col');
     
   
 }
 
 function openHome(){
     let frame = document.querySelector("iframe"),
         a = document.querySelector('.activeItemDoc'),
         b = document.querySelector('.menuList'),
         c = document.querySelectorAll('.rightScreen');
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
         d = document.querySelector('.activeItemDoc'),
         e = document.querySelector('.menuList');
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



     if(window.innerWidth <= 1024){
        if (e.style.height === "0px") {
            e.style.height = `${ e.scrollHeight }px`
        } else {
            e.style.height = `${ e.scrollHeight }px`;
            window.getComputedStyle(e, null).getPropertyValue("height");
            e.style.height = "0";
        }
        b.addEventListener("transitionend", () => {
            if (e.style.height !== "0px") {
                e.style.height = "auto"
            }
        });
         
     }else{

     }

     
     
      
 }
 function openUrl(elem){
     window.open(elem.getAttribute('src'),"_blank")
 }


