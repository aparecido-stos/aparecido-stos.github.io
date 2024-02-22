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
const local = document.getElementById("opcoes");
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
let totalPedidosPendentes = 0;
let totalPedidosFinalizados = 0;

function atualizarLabels() {
  const totalPedidosPendentesLabel = document.querySelector(
    ".totalPedidosPendentes"
  );
  const totalPedidosFinalizadosLabel = document.querySelector(
    ".totalPedidosFinalizados"
  );

  totalPedidosPendentesLabel.innerText =
    "Total Pedidos Pendentes: " + totalPedidosPendentes;
  totalPedidosFinalizadosLabel.innerText =
    "Total Pedidos Finalizados: " + totalPedidosFinalizados;
}

addClientBtn.addEventListener("click", function () {
  atualizarLabels();
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
    sosGG.value.trim() === "" &&
    hf101.value.trim() === "" &&
    hf102.value.trim() === "" &&
    hf132.value.trim() === "" &&
    hf100tp.value.trim() === ""
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
    if (totalPedidosPendentes > 0) {
      divClient.remove();
      readyClient.remove();
      dateHoursCurrent.remove();
      clientNameListRemove.remove();
      clientListOk.prepend(divClient);
      totalPedidosPendentes--;
      totalPedidosFinalizados++;

      atualizarLabels();
    } else {
      alert("Não há pedidos pendentes para marcar como pronto.");
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

    const timeOk = document.createElement("span");
    timeOk.className = "timeOk";
    timeOk.innerText = dateHoursCurrentFormatted;

    divClient.appendChild(timeOk);
    atualizarLabels();
  });

  const clientNameListRemove = document.createElement("label");
  clientNameListRemove.className = "nameClientRemove";
  clientNameListRemove.innerText = "Excluir";
  clientNameListRemove.type = "button";
  clientNameListRemove.addEventListener("click", function () {
    if (totalPedidosPendentes > 0) {
      divClient.remove();
      totalPedidosPendentes--;
      atualizarLabels();
    } else {
      alert("Não há pedidos pendentes para marcar como pronto.");
    }
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

  const observacoesTextarea = document.getElementById("observacoes");
  const observacoesValue = observacoesTextarea.value;
  const observacoesLabel = document.createElement("label");
  observacoesLabel.className = "observacoesLabel";

  if (observacoesValue.trim() !== "") {
    observacoesLabel.innerText = "Observações: " + observacoesValue;
  } else {
    observacoesLabel.innerText = "";
  }

  const checkboxAmbosLados = document.getElementById("ambosLados");
  const ambosLadosLabel = document.createElement("label");
  ambosLadosLabel.className = "ambosLadosLabel";

  if (checkboxAmbosLados.checked) {
    ambosLadosLabel.innerText = " Ambos lados: Sim";
  } else {
    ambosLadosLabel.innerText = "";
  }

  const localLi = document.createElement("li");
  localLi.className = "localLi";
  localLi.innerText = local.value;

  clientNameList.append(
    localLi,
    ambosLadosLabel,
    observacoesLabel,
    readyClient,
    clientNameListRemove
  );

  divClient.append(
    clientNameList,
    sosPli,
    sosMli,
    sosGli,
    sosGGli,
    hf101Li,
    dateHoursCurrent
  );

  clientList.appendChild(divClient);

  totalPedidosPendentes++;

  clientName.value = "";
  sosP.value = "";
  sosM.value = "";
  sosG.value = "";
  sosGG.value = "";
  checkboxAmbosLados.checked = false;
  observacoesTextarea.value = "";

  alert("Adicionado com sucesso");
  atualizarLabels();
});

const addOutraEmbalagem = document.getElementById("addOutraEmbalagem");

addOutraEmbalagem.addEventListener("click", function () {
  const UlPedidos = document.querySelector(".UlPedidos");

  const inputOutraEmbalagem = document.getElementById("inputOutraEmbalagem");

  const newRow = document.createElement("li");
  newRow.className = "inputRow";

  newRow.append(inputEmbalagem, NameEmbalagemLabel);
  UlPedidos.appendChild(newRow);
});
