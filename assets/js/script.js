
var radioButtons = document.getElementsByName('filter');

function radioChangeHandler() {
    var value = this.value;
    var contentOptions = document.getElementsByClassName("content-option");
    console.log(document.getElementsByClassName("content-option"));
    for (var i = 0; i < contentOptions.length; i++) {
        contentOptions.item(i).classList.remove("active");
    }
    document.getElementById(value).classList.add("active");
    console.log(document.getElementById(value));
  console.log('Radio button changed! Selected value:', this.value);
}

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', radioChangeHandler);
});