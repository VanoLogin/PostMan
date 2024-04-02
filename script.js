// main.js
import refs from "./refs/refs.js";
import {
  handleMainInput,
  handleTableParamsInput,
} from "./helpers/inputListener.js";

import { fillDataFromLS } from "./helpers/lsHelper.js";
import submitLink from "./helpers/submitForm.js";

// REFS addEventListener
fillDataFromLS();

refs.form.addEventListener("submit", submitLink);

refs.submitLinkInput.addEventListener("input", handleMainInput);

refs.tBody.addEventListener("input", handleTableParamsInput);
