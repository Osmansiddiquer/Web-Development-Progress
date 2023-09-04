"use strict";
const socket = io();
let userName = prompt("Enter your name: ", 'anonymous');

let form = document.querySelector("#form");
let input = document.querySelector("#input");
let message_list = document.querySelector("#messages")

socket.emit('set-name', userName);

socket.on('name-proposal', (name)=>{
    userName = prompt("Enter your name: ", name)
    socket.emit('set-name', userName);
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value){
        socket.emit('outgoing-message', input.value);

        let li = document.createElement('div');
        li.classList.add('message', 'self');
        li.innerHTML = `<header>${userName}</header>
                        ${input.value}`;
        message_list.appendChild(li);

        input.value = '';
    }
})

socket.on('left', (name)=>{
    let li = document.createElement('div');
    li.classList.add('leave', 'notice');
    li.innerText = `${name} has left the chat`;
    message_list.appendChild(li);
})

socket.on('join', (name)=>{
    let li = document.createElement('div');
    li.classList.add('join', 'notice');
    li.innerText = `${name} has joined the chat`;
    message_list.appendChild(li);
})

socket.on('incoming-message', (msg, sentBy)=>{
    let li = document.createElement('div');
    li.classList.add('message');
    li.innerHTML = `<header>${sentBy}</header>
                    ${msg}`;
    message_list.appendChild(li);
});


