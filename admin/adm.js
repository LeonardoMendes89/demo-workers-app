const doc = document
doc.onload = addEventListener('click',(e)=>e.preventDefault())
doc.onload = addEventListener('load',()=>{
    load_section_choices()
    $('.successsend-data').hide()
    $('.successupdate-data').hide()
    $('.successdelete-data').hide()
    $('.invalid-fields').hide()
    $('.invalid-server').hide()
    $('.config_mode').hide()
    $('.adm').hide()
})


$('#home').click(function(){
    doc.location.href = '../home/index.html'
})


function load_section_choices(){
    const url         = 'data.json'
    let  workersector = document.getElementById('sector')

    fetch(url)
            .then(data => data.json())
            .then(data =>{
                data.map(e=>{
                    let digite = 1
                    let cat = e.category
                    create_data(workersector,cat,'option',digite)
                })
            })
            .catch()
}


function create_data(positioned, el, createdObject,digite){
    if(digite == 1){
        let object = document.createElement(`${createdObject}`)
        object.append(el)
        positioned.append(object)
    }else if(digite == 2){
        positioned.value = el
    }
}


$('#clear').click(function(){
        let id            = document.querySelector('#id')
        let workername    = document.querySelector('#name')
        let workerjob     = document.querySelector('#job')
        let workersalary  = document.querySelector('#salary')
        let workersector  = document.querySelector('#sector')
    
        id.value           = ''
        workername.value   = ''
        workerjob.value    = ''
        workersalary.value = ''
        workersector.value = ''
})
    

function clear(){
    let id            = document.querySelector('#id')
    let workername    = document.querySelector('#name')
    let workerjob     = document.querySelector('#job')
    let workersalary  = document.querySelector('#salary')
    let workersector  = document.querySelector('#sector')

    id.value           = ''
    workername.value   = ''
    workerjob.value    = ''
    workersalary.value = ''
    workersector.value = ''
}   


$('#edition').click(function(){
    let normal = document.querySelector('.normal_mode')
    let config = document.querySelector('.config_mode')

    normal.style.display = 'none'
    config.style.display = 'flex'
})


$('#nmode').click(function(){
    let normal = document.querySelector('.normal_mode')
    let config = document.querySelector('.config_mode')

    normal.style.display = 'flex'
    config.style.display = 'none'
})


$('#send').click(function(){
    let workername    = document.querySelector('#name').value
    let workerjob     = document.querySelector('#job').value
    let workersalary  = document.querySelector('#salary').value
    let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100)

    }else{

        const url  = 'https://app-workers.herokuapp.com/'
        const data = {
            workername, workerjob, workersalary, workersector
        }
        const config = {
            method: 'POST',
            body :JSON.stringify(data),
            headers :{
                'Content-Type': 'application/json'
            }
        }

        fetch(url, config)
                        .then(datas => {
                                clear()
                                datas.json()
                                $('.successsend-data').show(100)
                        })
                        .catch(_ => $('.invalid-server').show(100))
    }
    
})


$('.invalid-fields').click(function(){
    $(this).hide(100)
})


$('.successsend-data').click(function(){
    $(this).hide(100)
})


$('.invalid-server').click(function(){
    $(this).hide(100)
})


$('.successupdate-data').click(function(){
    $(this).hide(100)
})


$('.successdelete-data').click(function(){
    $(this).hide(100)
})  


$('#getId').click(function(){
    let id            = document.querySelector('#id').value
    let workername    = document.querySelector('#name')
    let workerjob     = document.querySelector('#job')
    let workersalary  = document.querySelector('#salary')
    let workersector  = document.querySelector('#sector')

    if( workername     == ''||
        workerjob      == ''||
        workersalary   == ''||
        workersector   == ''  ){

            $('.invalid-fields').show(100)

    }else{

        const url    = `https://app-workers.herokuapp.com/${id}`
        const config = {
            method: 'GET'
        }

        fetch(url, config)
                        .then(datas => datas.json())
                        .then(datas => {
                            datas.map(e =>{
                               if(id){
                                    let digite = 2
                                  
                                    let nameBk      = e.workername
                                    let jobBk       = e.workerjob
                                    let salaryBk    = e.workersalary
                                    let sectorBk    = e.workersector
                                
                                    create_data(workername,nameBk,'ul',digite)
                                    create_data(workerjob,jobBk,'ul',digite)
                                    create_data(workersalary,salaryBk,'ul',digite)
                                    create_data(workersector,sectorBk,'ul',digite)
                               }
                            })
                        })
                        .catch(_ => $('.invalid-server').show(100))
    }
    
})


$('#update').click(function(){
    let id            = document.querySelector('#id').value
    let workername    = document.querySelector('#name').value
    let workerjob     = document.querySelector('#job').value
    let workersalary  = document.querySelector('#salary').value
    let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100)

    }else{

        const url  = `https://app-workers.herokuapp.com/?id=${id}`
        const data = {
            workername, workerjob, workersalary, workersector
        }
        const config = {
            method: 'PUT',
            body :JSON.stringify(data),
            headers :{
                'Content-Type': 'application/json'
            }
        }

        fetch(url, config)
                        .then(datas => {
                                clear()
                                datas.json()
                                $('.successupdate-data').show(100)
                        })
                        .catch(_ => $('.invalid-server').show(100))
    }
})


$('#delete').click(function(){
        let id            = document.querySelector('#id').value
        let workername    = document.querySelector('#name').value
        let workerjob     = document.querySelector('#job').value
        let workersalary  = document.querySelector('#salary').value
        let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100)

    }else{

        
        const url    = `https://app-workers.herokuapp.com/?id=${id}`
        const config = {
            method: 'DELETE',
        }

        fetch(url, config)
                        .then(data => {
                                clear()
                                data.json()
                                $('.successdelete-data').show(100)
                        })
                        .catch(_ => $('.invalid-server').show(100))

    }

})


$('#tog').click(function(){
    $('.adm').toggle(100)
})


$('.adm').click(function(){
    doc.location.href = '../home/index.html'
})


function storage(){
    let user = localStorage.getItem('_USER')
    let pass = localStorage.getItem('_PASSWORD')
    if(!user && !pass){
        doc.location.href = '../index.html'
    }
}
storage()

setInterval(function(){
    localStorage.removeItem('_USER')
    localStorage.removeItem('_PASSWORD')    
},90000);