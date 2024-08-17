// Função para verificar o estado de login ao carregar a página
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('profileButton').style.display = 'block';
        document.getElementById('userMenu').style.display = 'none'; // Ocultar menu até ser clicado
    } else {
        document.getElementById('loginModal').style.display = 'block';
        document.getElementById('profileButton').style.display = 'block';
        document.getElementById('userMenu').style.display = 'none'; // Ocultar menu de usuário
    }
}

// Função para lidar com o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Simula um processo de login bem-sucedido
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('nickname', nickname);

    alert(`Bem-vindo, ${nickname}! Você está logado.`);
    document.getElementById('loginModal').style.display = 'none';
    checkLoginStatus();
});

// Função para exibir/ocultar o menu de usuário ou a tela de login ao clicar no ícone de perfil
document.getElementById('profileButton').addEventListener('click', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userMenu = document.getElementById('userMenu');
    const loginModal = document.getElementById('loginModal');

    if (isLoggedIn === 'true') {
        // Alterna o menu de usuário
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    } else {
        // Exibe a tela de login
        loginModal.style.display = 'block';
    }
});

// Função para lidar com o logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('nickname');
    alert('Você saiu da conta.');
    checkLoginStatus();
});

// Função para alternar a visualização da senha
document.querySelectorAll('.toggle-password').forEach(function(eyeIcon) {
    eyeIcon.addEventListener('click', function() {
        const passwordInput = eyeIcon.previousElementSibling;

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.src = 'Img/Cipher.png'; // Caminho correto da imagem
        } else {
            passwordInput.type = 'password';
            eyeIcon.src = 'Img/Bill.png'; // Caminho correto da imagem
        }
    });
});

// Função para fechar o modal de login
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

// Verifica o estado de login ao carregar a página
window.addEventListener('load', checkLoginStatus);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Armazena as informações do usuário no localStorage
    localStorage.setItem('userNickname', nickname);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    // Redireciona para a página inicial ou realiza outras ações de login
    alert('Login realizado com sucesso!');
    // window.location.href = 'pagina-inicial.html'; // Exemplo de redirecionamento
});

document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    window.location.href = 'perfil.html'; // Redireciona para a página de perfil
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Remove a imagem de perfil personalizada
    localStorage.removeItem('userProfileImage');
    
    // Redireciona ou realiza o logout
    window.location.href = 'login.html'; // Exemplo de redirecionamento após logout
});
