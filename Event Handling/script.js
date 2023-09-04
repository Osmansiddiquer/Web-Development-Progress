let Consoles = document.getElementsByClassName("console");
Object.keys(Consoles).forEach((console) => {
  Consoles[console].setAttribute('data-before', Consoles[console].id);
});

function print(console_id, ...data) {
  let console = document.getElementById(console_id);
  let p = document.createElement("li");
  data.forEach(element => {
    if (typeof (element) == "object")
      element = JSON.stringify(element);
    else
      element = String(element);
    if (element == " ")
      p.innerHTML += "&nbsp;";
    else
      p.innerText = p.innerText + element + " ";
  });
  console.appendChild(p);
}

function toggleHide(name) {
  let element = document.querySelector(name);
  if(element.style.display != "none"){
    element.style.display = "none";
    print("console", name, "hidden");
  }
  else { element.style.display = "block";
  print("console", name, "shown");}
}
//btn won't refer to the element if btn is declared anywhere in the script
btn.addEventListener("mouseenter", ()=>{
    print("console", "Mouse entered the button.");
});


let button = document.getElementById("btn");
button.onmouseleave = ()=>{
    print("console", "Mouse left the button");
};
