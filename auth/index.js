const doc = document
doc.onload = addEventListener('click',(e) => e.preventDefault())


$('.enter').click(function(){
    let userlogin = $('.user').val()
    let passlogin = $('.pass').val()

    let error     = doc.querySelector('#error')
    let field     = doc.querySelector('.invalid-fields')
    let data      = doc.querySelector('.invalid-data')
    let server    = doc.querySelector('.invalid-server')

    let url = 'https://app-workers-auth.herokuapp.com/login'

    let account = { userlogin, passlogin }
    
    let config = {
            method : 'POST',
            body :JSON.stringify(data),
            headers :{
                'Content-Type': 'application/json'
            }
    }

   /* fetch(url,config)
                .then(response => console.log(response.json()))
                .catch(err => server.show)*/

})


function hidden_alert(){
    let userlogin  = $('.user')
    let passlogin  = $('.pass')
    let field   = doc.querySelector('.invalid-fields')
    let data    = doc.querySelector('.invalid-data')
    let server  = doc.querySelector('.invalid-server')

    userlogin.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
    passlogin.mouseenter(function(){
        field.style.display   = 'none'
        data.style.display    = 'none'
        server.style.display  = 'none'
    })
}
hidden_alert()


function clear(){
    let userlogin  = doc.querySelector('.user')
    let passlogin  = doc.querySelector('.pass')

    userlogin.value = ''
    passlogin.value = ''
}


function storage(USER,PASSWORD){
    localStorage.setItem('_USER',USER)
    localStorage.setItem('_PASSWORD',PASSWORD)    
}

/**
 * 
 * {
    "userlogin":"admin@aws.com",
    "passlogin":"81dc9bdb52d04dc20036dbd8313ed055"
}
 * 
 */