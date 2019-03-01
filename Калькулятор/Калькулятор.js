function getResult() {
	var numb1 = document.getElementById("numb1").value;
	var numb2 = document.getElementById("numb2").value;
	var op = document.getElementById("op").value;
	var res = document.getElementById("res");
	
	switch (op) {
		case("+"):
			var sum = Number(numb1) + Number(numb2);
			res.innerHTML = sum;
			break;			
		case("-"):
			var min = Number(numb1) - Number(numb2);
			res.innerHTML = min;
			break;
		case("/"):
			if(numb2 == 0) {
				alert("Деление на 0! Введите другое число или операцию.")
				return;
			}
			else {
				var del = Number(numb1) / Number(numb2);
				res.innerHTML = del;
				break;
			}
		case("*"):
			var mno = Number(numb1) * Number(numb2);
			res.innerHTML = mno;
			break;
		case("^"):
			var ste = Math.pow(numb1,numb2);
			res.innerHTML = ste;
			break;
		default:
			alert("Нет такой операции")
	}
}

function validate(input) {
    var value = input.value;
    var re = /[^0-9\-\.]/gi;
    if (re.test(value)) {
        value = value.replace(re, '');
        input.value = value;
        alert("Вы ввели не число");
	}
}
