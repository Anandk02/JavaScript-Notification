const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = [
    'Massage one',
    'massage two',
    'massage three',
    'massage four',
]

const types = [ 'info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type:getRandomType())

    notif.innerText = getRandomMsg()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },3000)
}

function getRandomMsg(){
    return message[Math.floor(Math.random() * message.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}

