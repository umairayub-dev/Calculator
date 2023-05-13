var result = document.getElementById('result').value

function getNumb(num) {
    document.getElementById('result').value += num
}

function deleteValue() {
   document.getElementById('result').value = document.getElementById('result').value.slice(0,result.length-1);
}

function clearValue() {
    document.getElementById('result').value = ""
}

function getResult() {
    // console.log(document.getElementById('result').value)
    document.getElementById('result').value = eval(document.getElementById('result').value)
}