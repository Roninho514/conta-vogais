const $contador  = document.querySelector('.conta-vogais')
const $buttonSend = document.querySelector('.button-send')
const $campName = document.querySelector('.camp-name')
let send = false
let vogais = 0
let frase = ''

$buttonSend.addEventListener ('click', function(){
    send = true
    console.log('clicou')
    enter()
})

function enter(){
    if(send == true){
        frase = document.getElementById('name-camp').value;
        cont(frase)
        
    }
}


function cont(){
    for(i=0; i<frase.length ; i++){
        name = frase[i]
        if( name == 'a'|| name == 'e'|| name == 'i'  || name =='o'  || name =='u' || name == 'A'|| name == 'E'|| name == 'I'  || name =='O'  || name =='U'  ){
            vogais = vogais + 1
        }
    }
    
    $contador.innerHTML += '<h2>' + vogais + ' vogais' +'</h2>'
    setTimeout (function(){
        reset()

    },500)
} 

function reset(){
    $contador.innerHTML = ''
    document.getElementById('name-camp').value = ''   
    vogais = 0
    send = false 
}

