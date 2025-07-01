

function check(event){
    event.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    const alert = document.querySelector('.alert')
    
    alert.style.color = 'red'

    if(!name || !email || !message){
        alert.textContent = 'fill all the details first'
        
    }

    else if (!name.match(/^[a-zA-Z]{6,10}$/)){
        alert.textContent = 'name invalid'
        
    }
    else if (!email.match(/^[a-z0-9]+@[a-z]+\.[a-z]+$/)){
        alert.textContent = 'invalid email'
        
    }

    else if (message.match(/[.]/)){
        alert.textContent = 'message is not valid'
        
    }
    else{
            alert.style.color = 'green'
    alert.textContent = 'submitted'
    }


    setTimeout(()=>{
    alert.textContent = null
    },3000)
    return
}

