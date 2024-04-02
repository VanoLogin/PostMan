import refs from "../refs/refs.js";

import { urlToParamsArray } from "./parsing.js";
import insertRow from "../templetes/templateRow.js";

export function fillTableWithData(paramsArray) {
  refs.tBody.innerHTML = "";
  const paramsAmount = paramsArray.length;
  if (paramsAmount === 0) {
    insertRow(0);
    insertRow(1);
    return;
  }

  // fill table from params array
  for (const i in paramsArray) {
    const [key, value] = paramsArray[i];
    insertRow(i, key, value);
  }
}

export function handleMainInput(event) {
  const inputValue = event.target.value;

  const paramsArray = urlToParamsArray(inputValue);

  fillTableWithData(paramsArray);

}

export function handleTableParamsInput(event) {
  const trElement = event.target.closest("tr");
  const trIdOfInputs = Number(trElement.dataset.id); //индекс пары из массива ключ - значение

  const targetValue = event.target.value;
  const targetName = event.target.name;

  const keyOrValueIndex = targetName === "key" ? 0 : 1; //  поле ключа находится в массиве параметров под индексом 0, а поле значения под индексом 1

  let currentURL = refs.submitLinkInput.value;

  if (!currentURL.endsWith("?")) {
    currentURL += "?";
  }

  const queryString = currentURL.split("?")[1];
  const pairsArray = queryString.split("&");
  // ["key=value", "key=value"]

  // проверка на последний инпут, если последний тогда добавляю новую строку и новый параметр (его проверяем опять что меняем - ключ или значение)
  if (trIdOfInputs === refs.tBody.children.length - 1) {
    insertRow(trIdOfInputs + 1);
    const newParam =
      keyOrValueIndex === 0 ? `${targetValue}=` : `=${targetValue}`;
    pairsArray.push(newParam); //["key=value", "key=value", "=newValue"]
  }

  const pairSplit = pairsArray[trIdOfInputs].split("="); // [key, value]

  pairSplit[keyOrValueIndex] = targetValue;

  pairsArray[trIdOfInputs] = pairSplit.join("=");
  // [key, value] -> ["key=value"]

  const updatedQueryString = pairsArray.join("&");
  // ["key=value", "key=value"] -> "key=value&key=value"

  const updatedLinkValue = currentURL.split("?")[0] + "?" + updatedQueryString;

  refs.submitLinkInput.value = updatedLinkValue;
}


