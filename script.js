let textoCampo = document.querySelector('.container__text');

let buttonCriptografar = document.querySelector('#criptografar');
let buttonDescriptografar = document.querySelector('#descriptografar');

let copyHidden = document.querySelector('.copy-hidden');
let boxHidden = document.querySelector('.box-hidden');
let msgHidden = document.querySelector('.msg-hidden');

let msgCopy = document.querySelector('.msg_copy');

function replace() {
    let textoCriptografado = textoCampo.value.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    textoCampo.value='';
    boxHidden.removeAttribute('style');
    msgHidden.removeAttribute('style');
    copyHidden.removeAttribute('style');
    msgHidden.value=textoCriptografado;
}

function decrypt(){
    let textoDescriptografado = textoCampo.value.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    textoCampo.value='';
    boxHidden.removeAttribute('style');
    msgHidden.removeAttribute('style');
    copyHidden.removeAttribute('style');
    msgHidden.value=textoDescriptografado;
}

function copy() {
    navigator.clipboard.writeText(msgHidden.value);
    msgCopy.removeAttribute('style');
}

copyHidden.addEventListener('mouseup',()=> {
    msgCopy.classList.add('animation');

    setTimeout(() => {
        msgCopy.style.display = 'none';
    }, 3000);
})

// TEMA ESCURO

let caixa_botao = document.querySelector('.caixa_botao');
let body = document.querySelector('body');
let containerArea = document.querySelector('.container__area-text');
let containerText = document.querySelector('.container__text');
let box = document.querySelector('.box-hidden');
let messageHidden = document.querySelector('.msg-hidden');
let copyButtonHidden = document.querySelector('.copy-hidden');
let containerBox = document.querySelector('.container__box');
let messageDescription = document.querySelector('.message-description');
let containerAreaLowImage = document.querySelector('.container__area-low-image');
let github = document.querySelector('.github_yago');
let developedText = document.querySelector('.developed_text')

caixa_botao.addEventListener('click', ()=> {
    caixa_botao.classList.toggle('dark');
    body.classList.toggle('dark');
    containerArea.classList.toggle('dark');
    containerText.classList.toggle('dark');
    box.classList.toggle('dark');
    messageHidden.classList.toggle('dark');
    copyButtonHidden.classList.toggle('dark');
    containerBox.classList.toggle('dark');
    messageDescription.classList.toggle('dark');
    containerAreaLowImage.classList.toggle('dark')
    github.classList.toggle('dark');
    developedText.classList.toggle('dark');
})


