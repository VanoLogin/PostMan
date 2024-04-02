import refs from "../refs/refs.js";
import { loadLs, POSTMAN_LS_KEY } from "../interfaces/interfaceLs.js";
import { fillTableWithData } from "./inputListener.js";
import { urlToParamsArray } from "./parsing.js";

export function fillDataFromLS() {
  const submitInputValue = loadLs(POSTMAN_LS_KEY.submitInput);
  const typeRequest = loadLs(POSTMAN_LS_KEY.typeOfRequest);
  if (!submitInputValue) return;
  refs.submitLinkInput.value = submitInputValue;
  refs.selectTypeRequest.value = typeRequest;
  const paramsArray = urlToParamsArray(submitInputValue);
  fillTableWithData(paramsArray);
}
