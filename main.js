//1
var name = "James Bond";
var height = 189;

var data = document.getElementById("data");
datos.innerHTML = `
    <h1>Im data box</h1>
    <h2>My name is: ${name}</h2>
    <h3>I measure: ${height}</h3>
`;

if(height >= 190){
    data.innerHTML += '<h5You are a tall person</h5>';
}
else{
    data.innerHTML += '<p>You are a short person<p>';
}

//2
for(i = 0; i <= 2020; i++){
    data.innerHTML += "<h4>We are in the year: "+i;
}

//3
function showMyData(name, height) {
  var data = document.getElementById("data");
  data.innerHTML = `
    <h1>Im data box</h1>
    <h2>My name is: ${name}</h2>
    <h3>I measure: ${height}</h3>
  `;
}

//4
function showMyData(name, height) {
    var myData = `
      <h1>Im data box</h1>
      <h2>My name is: ${name}</h2>
      <h3>I measure: ${height}</h3>
    `;
    return myData;
}

//5
function print(){
    var data = document.getElementById("data");
    data.innerHTML = showMyData("Frank", 26);
}

print();

//6
var name = ['Viko', 'Antony', 'Joaquin'];

document.write("<h1>List of names</h1>");

name.forEach((names) => {
    document.write(names + "<br>");
});

for(i = 0; i < names.length; i++){
    document.write(names[i] + '<br>');
}
