function send() {
  let amount = parseInt(document.getElementById("money").value);
  let money = 1000;
  let answer = money - amount;
  let charge = 0;
  document.getElementById("total").innerHTML = answer;
  document.getElementById("sends").innerHTML = amount;
  if (amount > 100) {
    charge = 200;
    answer = money - amount - charge;
    document.getElementById("total").innerHTML = answer;
    document.getElementById("initial").innerHTML = answer;
    document.getElementById("charge").innerHTML = charge;
  }
}
/*
function send() {
  let amount = parseInt(document.getElementById("money").value);
  let money = 1000;
  let answer;
  let charge;

  if ((amount >= 1 && amount <= 10, 000)) {
    charge = 0;
    answer = money - amount - charge;
    document.getElementById("total").innerHTML = answer;
    // document.getElementById("initial").innerHTML = answer;
    document.getElementById("charge").innerHTML = charge;
  } else if ((amount > 10, 000 && amount <= 100000)) {
    charge = 200;
    answer = money - amount - charge;
    document.getElementById("total").innerHTML = answer;
    document.getElementById("sends").innerHTML = amount;
  } else if (amount > 100000) {
    charge = 1000;
    answer = money - amount - charge;
    document.getElementById("total").innerHTML = answer;
    document.getElementById("sends").innerHTML = amount;
  } else {
    alert("nta amafaranga mufite yo gusoza icyo gikorwa");
  }
}
*/
function receive() {
  let amount = parseInt(document.getElementById("money").value);
  let money = 1000;
  let answer = money + amount;

  document.getElementById("total").innerHTML = answer;
  document.getElementById("receive").innerHTML = amount;
}

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

  if (!exist) {
    alert("incorrect username or password");
  } else {
    location.href = "/account.html";
  }
  e.preventDefault();
}
