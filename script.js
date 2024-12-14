document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });
    });
});
