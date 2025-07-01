function check(event){
    console.log('entered')
    event.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    
    if (!name.match(/^[a-zA-Z]{6,10}$/)){
        console.log('error occurred')
    }
    
}