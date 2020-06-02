const socket =io()
let name;
let massageArea =document.querySelector('.massage_area')
let textarea =document.querySelector('#textarea')
do {
  name= prompt('Please Enter Your Name:')
} while(!name)

textarea.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') {
      sendMessage(e.target.value )
      e.target.value="";
  }
})



function sendMessage(message) {
    var today = new Date();
    var date = today.getHours() + ":" + today.getMinutes();
    let msg={
        user : name,
        message: message.trim(),
        date:date
    }
    appendMessage(msg,"outgoing")

    socket.emit('message',msg)


}
function appendMessage(msg,type) {
    let mainDiv= document.createElement('div')
    let className=type
    mainDiv.classList.add(className,'massage')

    let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    <h5>${msg.date}</h5>
    `
    mainDiv.innerHTML = markup
    massageArea.appendChild(mainDiv)

}

socket.on('message',(msg)=>{
   appendMessage(msg,'incoming')
})