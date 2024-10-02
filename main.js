    const navLinks = document.querySelectorAll('.nav-pills .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remover a classe 'active' de todos os links
        navLinks.forEach(otherLink => otherLink.classList.remove('active'));

        // Adicionar a classe 'active' ao link clicado
        link.classList.add('active');
    });
});

