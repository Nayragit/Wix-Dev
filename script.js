const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.classList.add("light");
    document.getElementById("svg2-light").classList.add("hidden");
    document.getElementById("svg2-dark").classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("light");
    document.getElementById("svg2-light").classList.remove("hidden");
    document.getElementById("svg2-dark").classList.add("hidden");
  }
}
