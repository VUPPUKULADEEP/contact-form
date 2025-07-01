function check(event){
    console.log('entered')
    event.preventDefault()
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')
    
    console.log(name.value)
}