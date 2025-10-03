document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    // Validação básica
    if (!nomeCompleto || !usuario || !email || !telefone || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    alert('Cadastro realizado com sucesso!');
});