const doc = document
doc.onload = addEventListener('click',(e) => e.preventDefault())


$('.enter').click(function(){
    let userlogin = $('.user').val()
    let passlogin = $('.pass').val()
    let field = doc.querySelector('.invalid-fields')
    let data    = doc.querySelector('.invalid-data')
    let server  = doc.querySelector('.invalid-server')

    let url = 'https://app-workers-auth.herokuapp.com/login'

    let data = { userlogin, passlogin }

    let config = {
        method:'POST',
        body :JSON.stringify(data),
        headers :{
            'Content-Type': 'application/json'
        }
    }

    if(user == '' || pass == ''){
        field.style.display = 'block'
    }else{
        fetch(url,config)
                .then(auth => auth.json())
                .catch(_=>{
                    server.style.display  = 'block'
                })
    }

})


function hidden_alert(){
    let user  = $('.user')
    let pass  = $('.pass')
    let field   = doc.querySelector('.invalid-fields')
    let data    = doc.querySelector('.invalid-data')
    let server  = doc.querySelector('.invalid-server')

    user.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
    pass.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
}
hidden_alert()


function clear(){
    let user  = doc.querySelector('.user')
    let pass  = doc.querySelector('.pass')

    user.value = ''
    pass.value = ''
}


function storage(USER,PASSWORD){
    localStorage.setItem('_USER',USER)
    localStorage.setItem('_PASSWORD',PASSWORD)    
}
