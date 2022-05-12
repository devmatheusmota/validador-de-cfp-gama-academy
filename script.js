console.log('Javascript carregado...');

function validacao() {
	console.log('Iniciando validação do CPF.');

	var cpf = document.getElementById('cpf_digitado').value;

	var resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao) {
		document.getElementById('success').style.display = 'block';
		document.getElementById('error').style.display = 'none';
	} else {
		document.getElementById('error').style.display = 'block';
		document.getElementById('success').style.display = 'none';
	}
}

function validaCPF(cpf) {
	console.log(cpf.length);

	if (cpf.length != 11) {
		//Checking if CPF has more/less than 11 char
		return false;
	} else {
		var numeros = cpf.substring(0, 9);
		var digitos = cpf.substring(9);
		var soma = 0;
		for (var i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i;
		}

		console.log(soma);

		//Validação do primeiro dígito
		var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		console.log(resultado);
		if (resultado != digitos.charAt(0)) {
			return false;
		}

		soma = 0;
		numeros = cpf.substring(0, 10);

		for (var k = 11; k > 1; k--) {
			soma += numeros.charAt(11 - k) * k;
		}
		console.log(soma);
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		//Validação do segundo dígito
		if (resultado != digitos.charAt(1)) {
			return false;
		}

		return true;
	}
}
