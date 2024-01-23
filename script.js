let textoCampo = document.querySelector('.container__text');
let msgsCampo = document.querySelector('.messages')


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


