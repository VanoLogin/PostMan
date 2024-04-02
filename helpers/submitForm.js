import { saveLs, POSTMAN_LS_KEY } from "../interfaces/interfaceLs.js";
import refs from "../refs/refs.js";
import * as interfaces from "../interfaces/interfacesHttp.js";

import createArrayJsonTree from "../templetes/jsonTree.js";
import switchForTypeOfRequest from "../helpers/swichHelpers.js";

export default async function submitLink(event) {
  event.preventDefault();

  // Notiflix.Notify.failure("Qui timide rogat docet negare");

  const formData = new FormData(refs.form); // Создаем объект FormData из данных формы
  const inputLinkValue = formData.get("input-link");
  const typeOfRequest = formData.get("type-request");

  saveLs(POSTMAN_LS_KEY.submitInput, inputLinkValue);
  saveLs(POSTMAN_LS_KEY.typeOfRequest, typeOfRequest);

  refs.requestType.textContent = typeOfRequest;
  refs.requestLink.textContent = inputLinkValue;

  try {
    // Получаем размер файла асинхронно
    await interfaces.getFileSize(inputLinkValue);

    const response = await switchForTypeOfRequest(typeOfRequest);
    const startTime = new Date();

    const { data: dataResultArrayJson, status, statusText } = response;

    const endTime = new Date(); // Запоминаем время завершения запроса
    const requestTime = endTime - startTime; // Вычисляем время запроса

    createArrayJsonTree(dataResultArrayJson, refs.dataContainer);
    refs.status.textContent = `${status} ${statusText}`;
    refs.time.textContent = `${requestTime} ms`;
  } catch (error) {
    // В этом блоке обрабатываем ошибку от interfaces.getCards
    catchSubmitErrors(error);
  }
}

function catchSubmitErrors(error) {
  Notiflix.Notify.failure(`${error.message}`);
  refs.status.textContent = error.message;
  refs.size.textContent = error.response.statusText;
  refs.time.textContent = error.response.statusText;
  refs.dataContainer.innerHTML = "";
}
