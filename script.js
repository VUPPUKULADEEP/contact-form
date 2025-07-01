function check(event){
    event.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    
    if(!name || !email || !message){
        alert('fill all the details first')
        return
    }

    if (!name.match(/^[a-zA-Z]{6,10}$/)){
        alert('name invalid')
        return
    }
    if (!email.match(/^[a-z0-9]+@[a-z]+\.[a-z]+$/)){
        alert('invalid email')
        return
    }

    if (message.match(/[.]/)){
        alert('message is not valid')
        return
    }
    alert('submitted')
    return
}