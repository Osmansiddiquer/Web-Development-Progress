document.querySelectorAll("textarea").forEach(element=>{
    element.addEventListener('paste', (e)=>{
        e.preventDefault();
    })
})
