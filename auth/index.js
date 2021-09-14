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
                }
        }
    
             fetch(url,config)
                    .then(data => {
                        console.log(data.json())
                        doc.location.href = "/https://workers-app.netlify.app/home"
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


