onload = () =>{
        document.body.classList.remove("container");
};
// Memutar musik saat layar diklik/disentuh
document.body.addEventListener('click', function() {
    const audio = document.getElementById('musik');
    const hint = document.getElementById('hint-teks');
    
    if (audio.paused) {
        audio.play();
        hint.style.display = 'none'; // Menyembunyikan teks petunjuk setelah lagu diputar
    }
});
