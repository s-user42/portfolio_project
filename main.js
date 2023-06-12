const $btnDarkMode = document.querySelector(".dark-mode-btn");


//verificarea temei sistemului
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}





//verificarea temei in localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    $btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} 
else if (localStorage.getItem('darkMode') === 'light') {
    $btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}



window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        $btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem("darkMode", "dark");
    } 
    else {
        $btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem("darkMode", "light");
    }
})


$btnDarkMode.onclick = () => {
    $btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDarkMode = document.body.classList.toggle("dark");

    if (isDarkMode) {
        localStorage.setItem('darkMode', 'dark');
    }
    else {
        localStorage.setItem('darkMode', 'light');
    }
}