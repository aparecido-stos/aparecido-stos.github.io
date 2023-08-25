const usename = document.getElementById("username");

//Menu dropdawn
const h3 = document.querySelector(".inputMarket > h3");
h3.addEventListener("click", function () {
  const inputMarket = document.querySelector(".inputMarket p");

  if (inputMarket.classList.contains("mostrar")) {
    h3.innerHTML = "Adicionar Clientes ⇵";
    inputMarket.classList.remove("mostrar");
  } else {
    inputMarket.classList.add("mostrar");
  }
  clientName.focus();
});

const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
  if (
    dropdownContent.style.width === "0px" ||
    dropdownContent.style.width === ""
  ) {
    dropdownContent.style.width = "250px";
  } else {
    dropdownContent.style.width = "0px";
  }
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownContent.style.width = "0px";
  }
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

  if (parseInt(sosP.value) === 0) {
    alert("Sos nao pode ser 0");
    return;
  }

  if (parseInt(sosM.value) === 0) {
    alert("Sos nao pode ser 0");
    return;
  }

  if (parseInt(sosG.value) === 0) {
    alert("Sos nao pode ser 0");
    return;
  }

  if (parseInt(sosGG.value) === 0) {
    alert("Sos nao pode ser 0");
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

  clientNameList.append(readyClient, clientNameListRemove);

  divClient.append(
    clientNameList,
    sosPli,
    sosMli,
    sosGli,
    sosGGli,
    dateHoursCurrent
  );

  clientList.appendChild(divClient);

  clientName.value = "";
  sosP.value = "";
  sosM.value = "";
  sosG.value = "";
  sosGG.value = "";
});
