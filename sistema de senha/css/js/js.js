const vSenha = document.querySelector("#senha");
let senhaNormal = 0;
let senhaPreferencial = 0;
let ultSenha = 'N';

window.addEventListener('keydown', function(e) {
if (e.key== 'N' || e.key== 'N'){
senhaNormal++;
ultSenha = 'N';
} else if (e.key== 'P' || e.key== 'P'){
senhaPreferencial++;
ultSenha = 'P';
}
mostrarSenha();
});

function mostrarSenha(){
if(vSenha = 'N'){
vSenha.innerHTML = 'N' + senhaNormal.toLocaleString('pt-br', {minimumIntegerDigits: 3});
}else{
vSenha.innerHTML = 'P' + senhaPreferencial.toLocaleString('pt-br', {minimumIntegerDigits: 3});
}
}