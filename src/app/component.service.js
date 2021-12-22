import "./../input-value.scss";

export class ComponentService {
	constructor() {
		this.numberOneInput = document.getElementById("numberOne");
		this.numberOneInput.classList.add("primary");

		this.numberTwoInput = document.getElementById("numberTwo");
		this.numberTwoInput.classList.add("primary");

		this.addValuesButton = document.getElementById("addValues");
		this.resultDiv = document.getElementById("result");

		this.cardBody = document.querySelector(".card-body");
		this.cardBody.classList.add("success");
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
