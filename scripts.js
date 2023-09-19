const btnLogin = document.querySelector(".btn");
btnLogin.addEventListener("click", function () {
  const login = document.getElementById("login").value;
  const passwordDefault = document.getElementById("password").value;
  const users = [
    { username: "Gustavo", password: "1234" },
    { username: "Aparecido", password: "1234" },
  ];

  loadingOverlay.style.display = "block"; // Exibe a tela de carregamento
  setTimeout(function () {
    const user = users.find(
      (user) => user.username === login && user.password === passwordDefault
    );
    if (user) {
      location.href = "/menu/menu.html";
    } else {
      alert("Senha incorreta");
    }
    loadingOverlay.style.display = "none"; // Oculta a tela de carregamento
  }, 1500); // Simula um tempo de processamento de 2 segundos
});
//Apenas para tecla enter do teclado PC funcione
const passwordInput = document.getElementById("password").value;
passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnLogin.click();
  }
});
