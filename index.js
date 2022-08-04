$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});
const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.email.toLowerCase() == email.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, lname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert(`account created`);
  } else {
    alert(`you already have an account`);
  }
  e.preventDefault();
};
function signIn(e) {
  let email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email.toLowerCase() &&
        data.pwd.toLowerCase() == pwd.toLowerCase()
    );
  console.log(exist);

  if (!exist) {
    alert("incorrect username or password");
  } else {
    location.href = "./account.html";
  }
  e.preventDefault();
}

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
