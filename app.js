var result = document.getElementById('result')

function getNumber(num) {
    result.value += num
}

function deleteValue() {
    result.value = result.value.slice(0, result.value.length - 1);
}

function clearValue() {
    result.value = ""
}

function getResult() {
    if (result.value.length != 0 || result.value != "") {
        var value = eval(result.value)
        if (value == "undefined" || value == undefined) {
            result.value = "Invalid expression"
            return
        }
        result.value = value
    }
}

function square() {
    if (result.value.length != 0 || result.value != "") {
        result.value = result.value * result.value
    }
}