let balance = document.getElementById("initial");
let receive = document.getElementById("receive");
let send = document.getElementById("send");
let receiveInput = document.getElementById("receive-input");
let sendInput = document.getElementById("send-input");
let receivedBtn = document.getElementById("btn-receive");
let sendBtn = document.getElementById("btn-send");
let charge = document.getElementById("charge");

receivedBtn.addEventListener("click", () => {
  const value = receiveInput.value;
  const receiveValue = Number(receive.innerText) + Number(value);
  const balanceValue = Number(balance.innerText) + Number(value);
  receive.innerText = receiveValue;
  balance.innerText = balanceValue;
});
sendBtn.addEventListener("click", () => {
  const value = sendInput.value;
  if (Number(value) === 0) {
    alert("you don't have any money to send");
  } else if (Number(value) > Number(balance.innerText)) {
    alert("ntabwo ufite amafaranga agahije yo gusoza icyo gikorwa");
  } else if (Number(value) >= 10000 && Number(value <= 100000)) {
    const chargeValue = 200;
    const sendValue = Number(send.innerText) + Number(value);

    const balanceValue =
      Number(balance.innerText) - Number(value) - chargeValue;
    send.innerText = sendValue;
    charge.innerText = chargeValue;
    balance.innerText = balanceValue;
  } else if (Number(value) >= 100000) {
    const chargeValue = 1000;
    const sendValue = Number(send.innerText) + Number(value);

    const balanceValue =
      Number(balance.innerText) - Number(value) - chargeValue;
    send.innerText = sendValue;
    charge.innerText = chargeValue;
    balance.innerText = balanceValue;
  } else {
    const sendValue = Number(send.innerText) + Number(value);

    const balanceValue = Number(balance.innerText) - Number(value);
    send.innerText = sendValue;
    balance.innerText = balanceValue;
  }
});
