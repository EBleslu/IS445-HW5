function checkNumPrime(n){
    if (n < 4){
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0){
        return false;
    }
    var di = 2;
    var i = 5;
    var lim = Math.floor(Math.sqrt(n));
    while (i < lim){
      if (n % i == 0){
          return false;
      }
      i = i + di;
      di = 6 - di;
    }
    return true;
}

function get_primes(min ,max){
    var primes=[];
    for (i = min; i <= max; i++){
        if (checkNumPrime(i)){
          primes.push(i);
        }
    }
    return primes;
}

const error = document.querySelector('#error')
const result = document.querySelector('#result')

function check_numbers() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    if (number1 < 2 || number1 > 100 || number2 < 2 || number2 > 100) {
        error.style.display = 'block'
        result.style.display = 'none'
    } else {
        error.style.display = 'none'
        var res;
        if (number1 < number2) {
            res = get_primes(number1, number2);
        } else {
            res = get_primes(number2, number1);
        }
        var content = "<h2>There are " + res.length.toString() + " prime numbers.</h2>"
        if (res.length > 0) {
            content = content + "<p>" + res[0].toString()
            for (var i = 1; i < res.length; i++) {
                content = content + "," + res[i].toString()
            }
            content = content + "</p>"
        }
        result.innerHTML = content
        result.style.display = 'block'
    }
}