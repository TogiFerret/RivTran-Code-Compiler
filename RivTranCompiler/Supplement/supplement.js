// More freaking things to get other things to work //
var editor = CodeMirror.fromTextArea(document.getElementById('entercode'), {
  lineNumbers: true,
});
function s_plitLines(t) { return t.split(/\r\n|\r|\n/); }
function g_o() {
  var code = editor.getValue();
  var listOCode = s_plitLines(code);
  listOCode.forEach(lineOCode => {
    if (lineOCode.startsWith("//")) {
    } else {
      eval(c_ompiler(lineOCode));
    }
  })
}
// Wow that was so much shorter than I thought
//
// Basically, dot things, vars, loops, and functions; THe ability to do that is here

console.log = function (message) {
  // Display the message somewhere... (jQuery example)
  var console = document.getElementById("output");
  var text = document.createTextNode(message);
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  console.appendChild(text);
  console.appendChild(clon);
};
function clearConsole() {
  var console = document.getElementById("output");
  console.innerHTML = "";
}
function consoleLog(message) {
  console.log(message);
}
function createVar(name, value) {
  localStorage.setItem(name, value);
}
function getVar(name) {
  return localStorage.getItem(name);
}
function loop(count, codeAsString) {
  for (let step = 0; step < count; step++) {
    eval(c_ompiler(codeAsString));
  }
}
function createFunction(name, codeAsString) {
  localStorage.setItem(name, c_ompiler(codeAsString));
}

function runFunction(name) {
  eval(localStorage.getItem(name));
}
function join(str1, str2) {
  return str1 + str2;
}
function add(int1, int2) {
  // Add int2 and int1
  return int1 + int2;
}
function subtract(int1, int2) {
  // Subtract int2 from int1
  return int1 - int2;
}
function divide(int1, int2) {
  // Divide int1 by int2
  return int1/int2;
}
function multiply(int1, int2) {
  // Multiply int2 by int1
  return int1*int2;
}