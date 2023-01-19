let countries = [

];





function addElement() {
  countries.push(document.getElementById('myInput').value); 
  document.getElementById('myInput').value = ''; 
  render(); 
}

function removeElement(x) {
  var myInput = countries.splice(x, 1);
  render(); 
}

function render() {
  var gela = '';
  
  for (i = 0; i < countries.length; i++) {
    gela +=countries[i] + " <button onClick='removeElement(" + countries.indexOf(countries[i]) + ")'> Remove</button> " + "<br >"; 
  }
  document.getElementById('render').innerHTML = gela; 
}
