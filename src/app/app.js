import { parseInputs } from "./utils/parse-inputs";
import { inputAreValid } from "./utils/input-are-valid";

export const run = (alertService, componentService) => {
	alertService.hideErrors();

	componentService.onClick(() => {
		alertService.hideErrors();
		const inputs = componentService.getInputs();
		const parsedInputs = parseInputs(...inputs);

		if (inputAreValid(...parsedInputs)) {
			const [numA, numB] = parsedInputs;
			componentService.setResult(numA + numB);
			componentService.clearInputsArea();
		} else {
			componentService.setResult("");
			alertService.handleAdditionError(inputs, parseInputs);
		}
	});
};
