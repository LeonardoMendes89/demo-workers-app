const doc = document
doc.onload = addEventListener('click',(e) => e.preventDefault())


$('#enter').click(function(){
    userlogin = doc.getElementById('user').value
    passlogin = doc.getElementById('pass').value

    let field     = doc.querySelector('.invalid-fields')
    let data      = doc.querySelector('.invalid-data')
    let server    = doc.querySelector('.invalid-server')

    if( userlogin === '' || passlogin === ''){

        field.style.display = 'block'

    }else{

        let url = 'https://app-workers-auth.herokuapp.com/login'

        let account = { userlogin, passlogin }
        
        let config = {
                method : 'POST',
                body :JSON.stringify(account),
                headers :{
                    'Content-Type':'application/json'
                },
                cors:'cors'
        }
    
             fetch(url,config)
                        .then(_ => {
                            storage(userlogin,passlogin)
                            doc.location.href = "/home"
                        })
                        .catch(_ =>{
                            server.style.display = 'block'
                        })

            

        }

})


function hidden_alert(){
    let userlogin  = $('#user')
    let passlogin  = $('#pass')
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
    let userlogin  = doc.querySelector('#user')
    let passlogin  = doc.querySelector('#pass')

    userlogin.value = ''
    passlogin.value = ''
}


function storage(USER,PASSWORD){
    localStorage.setItem('_USER',USER.substring(0,6))
    localStorage.setItem('_PASSWORD',PASSWORD.substring(0,9))    
}


/**
 * 
 *      {
            "userlogin":"admin@aws.com",
            "passlogin":"81dc9bdb52d04dc20036dbd8313ed055"
        }
 * 
 * 
 */