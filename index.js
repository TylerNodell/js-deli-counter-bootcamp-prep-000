var katzDeli = [];
var ticketnumber = 0
// function takeANumber(line, name) {
//   katzDeli = line.push(name)
//   return `Welcome, ${name}. You are number ${line.length} in line.`
// }
function takeanumber() {
  ticketnumber++
  return ticketnumber
}
function nowServing(line) {
  if (line.length != 0) {
    var serving = line[0]
    line.shift()
    return  `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function nowServingNubmer(ticketnumber) {
  for (var i = 1; i <= ticketnumber; i++) {
    console.log(`Currently serving # ${i}`)
  }
}

function currentLine(line) {
  var lineString = "The line is currently: ";
  if (line.length != 0) {
    for (var i = 0; i < line.length ; i++) {
        lineString += (i+1) + ". " + line[i] + ", ";
    }
  } else {
    return "The line is currently empty."
  }
  return lineString.slice(0, -2)
}
