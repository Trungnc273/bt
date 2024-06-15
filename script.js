function validate() {
  if (document.myForm.id.value == "") {
    alert("Please provide your ID!");
    document.myForm.Name.focus();
    return false;
  }
  if (document.myForm.id.value.length >= 10) {
    alert("Please provide ID length must be small or equal 10!");
  }

  return true;
}
