document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const contato = document.getElementById('contato').value;
    const senha = document.getElementById('senha').value;
    
    if (usuario && contato && senha) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});