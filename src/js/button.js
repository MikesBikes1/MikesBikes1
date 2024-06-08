document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.bike-button');
    const links = document.querySelectorAll('.nav-link');
    const pageStatus = document.querySelector('.page-status');

    function updatePage(section) {
        buttons.forEach(button => {
            if (button.dataset.section === section) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        links.forEach(link => {
            if (link.dataset.section === section) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        pageStatus.textContent = `⚠️ ${section.replace(/-/g, ' ').toUpperCase()} page under construction ⚠️`;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            updatePage(button.dataset.section);
        });
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updatePage(link.dataset.section);
        });
    });
});
