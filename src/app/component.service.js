import "./../input-value.css";

export class ComponentService {
	constructor() {
		this.numberOneInput = document.getElementById("numberOne");
		this.numberOneInput.classList.add("input-value");
		this.numberTwoInput = document.getElementById("numberTwo");
		this.numberTwoInput.classList.add("input-value");
		this.addValuesButton = document.getElementById("addValues");
		this.resultDiv = document.getElementById("result");
	}

	getInputs() {
		return [this.numberOneInput.value, this.numberTwoInput.value];
	}

	setResult(str) {
		this.resultDiv.innerText = str;
	}

	onClick(callback) {
		this.addValuesButton.addEventListener("click", callback);
	}

	clearInputsArea() {
		this.numberOneInput.value = "";
		this.numberTwoInput.value = "";
	}
}
