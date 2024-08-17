// Clique na imagem de perfil para abrir o seletor de arquivos
document.getElementById('profileImage').addEventListener('click', function() {
    document.getElementById('fileInput').click(); // Simula o clique no input de arquivo
});

// Trocar a imagem de perfil e salvar no localStorage
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            document.getElementById('profileImage').src = imageData;

            // Salva a imagem no localStorage
            localStorage.setItem('userProfileImage', imageData);
        }
        reader.readAsDataURL(file);
    }
});

// Carrega a imagem de perfil salva quando a página de perfil é carregada
window.addEventListener('load', function() {
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
        document.getElementById('profileImage').src = savedImage;
    }
});


document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.src = 'Img/Cipher.png'; // Caminho correto da imagem
    } else {
        passwordInput.type = 'password';
        this.src = 'Img/Bill.png'; // Caminho correto da imagem
    }
});

document.getElementById('libraryButton').addEventListener('click', function() {
    window.location.href = 'minha-biblioteca.html'; // Caminho para a página da biblioteca
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Lógica para salvar as alterações (aqui você pode integrar com o back-end)
    alert('Alterações salvas com sucesso!');
});

// Carrega as informações do usuário armazenadas
window.addEventListener('load', function() {
    const savedNickname = localStorage.getItem('userNickname');
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    
    if (savedNickname) {
        document.getElementById('nickname').value = savedNickname;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Atualiza as informações armazenadas
    const updatedNickname = document.getElementById('nickname').value;
    const updatedEmail = document.getElementById('email').value;
    const updatedPassword = document.getElementById('password').value;

    localStorage.setItem('userNickname', updatedNickname);
    localStorage.setItem('userEmail', updatedEmail);
    localStorage.setItem('userPassword', updatedPassword);

    alert('Alterações salvas com sucesso!');
});
