//janela de adicionar clientes
const btnAbrirModal = document.getElementById("title");
const modal = document.getElementById("minhaModal");
const btnFecharModal = document.getElementById("fecharModal");

btnAbrirModal.addEventListener("click", function () {
  modal.style.display = "block";
});

btnFecharModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//menu lateral
const itemMenu = document.querySelectorAll(".itemMenu");

function selectLink() {
  itemMenu.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

itemMenu.forEach((item) => item.addEventListener("click", selectLink));

const btnExp = document.querySelector("#btnExp");
const menuLateral = document.querySelector(".menuLateral");
btnExp.addEventListener("click", function () {
  menuLateral.classList.toggle("expandir");
});

// Adicionar clientes

const clientName = document.getElementById("clientName");
const clientList = document.getElementById("clientList");
const clientListOk = document.getElementById("clientListOk");
const addClientBtn = document.getElementById("addClientBtn");
const sosP = document.getElementById("numberSosP");
const sosM = document.getElementById("numberSosM");
const sosG = document.getElementById("numberSosG");
const sosGG = document.getElementById("numberSosGG");
const hf101 = document.getElementById("numberhf101");
const hf102 = document.getElementById("numberhf102");
const hf132 = document.getElementById("numberhf132");
const hf100tp = document.getElementById("numberhf100tp");
const pedidosAFazer = document.querySelector(".pedidosAFazer");

clientName.focus;

addClientBtn.addEventListener("click", function () {
  // Verifica se o nome do cliente não está vazio
  if (clientName.value.trim() === "") {
    alert("Por favor, insira o nome do cliente.");
    clientName.placeholder = "Nome do cliente";
    clientName.focus();
    return;
  }

  if (
    sosP.value.trim() === "" &&
    sosM.value.trim() === "" &&
    sosG.value.trim() === "" &&
    sosGG.value.trim() === ""
  ) {
    alert("Por favor, insira pelo menos um valor em um campo SOS.");
    return;
  }

  let dateCurrent = new Date();

  let day = dateCurrent.getDate();
  let month = dateCurrent.getMonth() + 1;
  let year = dateCurrent.getFullYear();
  let hours = dateCurrent.getHours();
  let minutes = dateCurrent.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (year < 10) {
    year = "0" + year;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateHoursCurrentFormatted =
    day + "/" + month + "/" + year + " " + hours + "h" + minutes;

  const divClient = document.createElement("div");
  divClient.className = "divClient";

  const dateHoursCurrent = document.createElement("label");
  dateHoursCurrent.className = "dateHoursCurrent";
  dateHoursCurrent.innerText = dateHoursCurrentFormatted;

  const timeOk = document.createElement("span");
  timeOk.className = "timeOk";
  timeOk.innerText = dateHoursCurrentFormatted;

  const readyClient = document.createElement("label");
  readyClient.className = "readyClient";
  readyClient.innerText = "Pronto";
  readyClient.type = "button";
  readyClient.addEventListener("click", function () {
    divClient.remove();
    readyClient.remove();
    dateHoursCurrent.remove();
    clientNameListRemove.remove();
    clientListOk.appendChild(divClient);

    let dateCurrent = new Date();

    let day = dateCurrent.getDate();
    let month = dateCurrent.getMonth() + 1;
    let year = dateCurrent.getFullYear();
    let hours = dateCurrent.getHours();
    let minutes = dateCurrent.getMinutes();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    if (year < 10) {
      year = "0" + year;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const dateHoursCurrentFormatted =
      day + "/" + month + "/" + year + " " + hours + "h" + minutes;

    const timeOk = document.createElement("span");
    timeOk.className = "timeOk";
    timeOk.innerText = dateHoursCurrentFormatted;

    divClient.appendChild(timeOk);
  });

  const clientNameListRemove = document.createElement("label");
  clientNameListRemove.className = "nameClientRemove";
  clientNameListRemove.innerText = "Excluir";
  clientNameListRemove.type = "button";
  clientNameListRemove.addEventListener("click", function () {
    divClient.remove();
  });

  const clientNameList = document.createElement("li");
  clientNameList.className = "nameClient";
  clientNameList.innerText = clientName.value;

  const sosPli = document.createElement("li");
  sosPli.className = "sosPli";
  sosPli.innerText = sosP.value + " Sos P ";
  if (sosP.value.trim() !== "") {
    sosPli.innerText = sosP.value + " Sos P";
  } else {
    sosPli.innerText = "";
  }

  const sosMli = document.createElement("li");
  sosMli.className = "sosMli";
  sosMli.innerText = sosM.value + " Sos M ";
  if (sosM.value.trim() !== "") {
    sosMli.innerText = sosM.value + " Sos M";
  } else {
    sosMli.innerText = "";
  }

  const sosGli = document.createElement("li");
  sosGli.className = "sosGli";
  sosGli.innerText = sosG.value + " Sos G ";
  if (sosG.value.trim() !== "") {
    sosGli.innerText = sosG.value + " Sos G";
  } else {
    sosGli.innerText = "";
  }

  const sosGGli = document.createElement("li");
  sosGGli.className = "sosGGli";
  sosGGli.innerText = sosGG.value + " Sos GG ";
  if (sosGG.value.trim() !== "") {
    sosGGli.innerText = sosGG.value + " Sos GG";
  } else {
    sosGGli.innerText = "";
  }

  const hf101Li = document.createElement("li");
  hf101Li.className = "hf101Li";
  hf101Li.innerText = hf101.value + " HF 101 ";
  if (hf101.value.trim() !== "") {
    hf101Li.innerText = hf101.value + " HF 101";
  } else {
    hf101Li.innerText = "";
  }

  const outraEmbalagem = document.createElement("li");
  outraEmbalagem.className = "sosGli";
  outraEmbalagem.innerText = inputOutraEmbalagem.value

  clientNameList.append(readyClient, clientNameListRemove);

  divClient.append(
    clientNameList,
    sosPli,
    sosMli,
    sosGli,
    sosGGli,
    hf101Li,
    outraEmbalagem,
    dateHoursCurrent
  );

  clientList.appendChild(divClient);

  clientName.value = "";
  sosP.value = "";
  sosM.value = "";
  sosG.value = "";
  sosGG.value = "";

  alert("Adicionado com sucesso");
});

const addOutraEmbalagem = document.getElementById("addOutraEmbalagem");

addOutraEmbalagem.addEventListener("click", function () {
  // Obtém o valor do input para o nome da outra embalagem
  let inputOutraEmbalagem = document.getElementById(
    "inputOutraEmbalagem"
  ).value;

  // Cria um novo elemento de lista
  const novoItemPedido = document.createElement("li");

  // Cria a caixa de input
  const inputEmbalagem = document.createElement("input");
  inputEmbalagem.type = "text";
  inputEmbalagem.id = "numberSosG";
  inputEmbalagem.value = ''
  document.body.appendChild(inputEmbalagem)

  // Cria a label para a embalagem
  const labelEmbalagem = document.createElement("label");
  labelEmbalagem.textContent = inputOutraEmbalagem;

  // Adiciona a caixa de input e a label ao novo elemento de lista
  novoItemPedido.append(inputEmbalagem, labelEmbalagem);
  // Adiciona o novo elemento de lista à lista de pedidos (UlPedidos)
  const UlPedidos = document.querySelector(".UlPedidos");
  UlPedidos.appendChild(novoItemPedido);
});
