// adding this '!' is the programmer's gurantee that the object won't be null
// adding '?' indicates optional chaining

const form: HTMLFormElement = document.querySelector('.new-item-form')!
const type: HTMLSelectElement = document.querySelector('#type')!
const tofrom: HTMLInputElement = document.querySelector("#tofrom")!
const details: HTMLInputElement = document.querySelector('#details')!
const amount: HTMLInputElement = document.querySelector('#amount')!
const item_list: HTMLUListElement = document.querySelector('.item-list')!;

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let item = document.createElement('li');
    let remove_btn = document.createElement('button');
    remove_btn.classList.add('remove');
    remove_btn.addEventListener('click', () => {
        const parent = remove_btn.parentElement;
        if (parent != null)
            parent.remove();
        else
            console.error("Cannot access parent element");
    })
    item.appendChild(remove_btn);
    let heading = document.createElement('h4');
    heading.innerText = type.value;
    item.appendChild(heading);
    let text = document.createElement('p');
    let oweText;
    if(type.value == "invoice")
        oweText = "owes"
    else
        oweText = "is owed"
    text.innerText = `${tofrom.value} ${oweText} ${amount.valueAsNumber}﷼ for ${details.value}`;
    item.appendChild(text);

    item_list.appendChild(item);
})
