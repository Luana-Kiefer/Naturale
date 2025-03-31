document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        const submenu = item.querySelector(".submenu");

        if (submenu) {
            item.addEventListener("mouseenter", function () {
                submenu.style.opacity = "1";
                submenu.style.visibility = "visible";
                submenu.style.transform = "translateY(5px)"; // Ajuste para o submenu aparecer suavemente
            });

            // Se o mouse sair do item do menu, mas ainda estiver no submenu, ele continua visível
            item.addEventListener("mouseleave", function (event) {
                if (!item.contains(event.relatedTarget)) {
                    submenu.style.opacity = "0";
                    submenu.style.visibility = "hidden";
                    submenu.style.transform = "translateY(10px)"; // Deixa o submenu voltar para sua posição inicial
                }
            });
        }
    });
});
