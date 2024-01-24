let textoCampo = document.querySelector('.container__text');

let buttonCriptografar = document.querySelector('#criptografar');
let buttonDescriptografar = document.querySelector('#descriptografar');

let copyHidden = document.querySelector('.copy-hidden');
let boxHidden = document.querySelector('.box-hidden');
let msgHidden = document.querySelector('.msg-hidden');

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
    msgHidden.value=''
}

// TEMA ESCURO

let caixa_botao = document.querySelector('.caixa_botao');

caixa_botao.addEventListener('click', ()=> {
    caixa_botao.classList.toggle('dark')
})
