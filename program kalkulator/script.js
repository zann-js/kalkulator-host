const clickSound = document.getElementById("clickSound");

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function appendValue(value) {
  playClick();
  document.getElementById("display").value += value;
}

function clearDisplay() {
  playClick();
  document.getElementById("display").value = "";
}

function calculate() {
  playClick();
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch (e) {
    alert("Input tidak valid!");
  }
}

function addToHistory(entry) {
  const ul = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  ul.prepend(li);
}

function toggleTheme() {
  playClick();
  document.body.classList.toggle("light");
}

function goToCalculator() {
  playClick();
  document.getElementById("homepage").classList.add("hidden");
  document.getElementById("calculatorPage").classList.remove("hidden");
  void document.getElementById("calculatorPage").offsetWidth;
}
