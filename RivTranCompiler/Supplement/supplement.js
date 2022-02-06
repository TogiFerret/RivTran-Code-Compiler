// More freaking things to get other things to work //
function s_plitLines(t) { return t.split(/\r\n|\r|\n/); }
function g_o() {
  var code = document.getElementById("entercode").value;
  var listOCode = s_plitLines(code);
  listOCode.forEach(lineOCode => {
      eval(c_ompiler(lineOCode));
  })
}
// Wow that was so much shorter than I thought
//
// Basically, dot things, vars, loops, and functions; THe ability to do that is here
function consoleLog(message) {
  console.log(message);
}
function createVar(name, value) {
  localStorage.setItem(name, value);
}
function getVar(name){
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
