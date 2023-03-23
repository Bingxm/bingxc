var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleDropdown(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("show");
}

function selectOption(dropdownId, option) {
  var selectedOption = document.getElementById('selected-option' + dropdownId.slice(-1));
  selectedOption.innerHTML = " " + option;
  toggleDropdown(dropdownId);
}

window.onclick = function(event) {
}
  if (!event.target.matches('.dropbtn')) {
  }
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    }
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
      }
        openDropdown

        function Copy(containerid) {
          let textarea = document.createElement('textarea');
          textarea.id = 'temp';
          textarea.style.height = 0;
          document.body.appendChild(textarea);
          textarea.value = document.getElementById(containerid).innerText;
          let selector = document.querySelector('#temp');
          selector.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
    }