// HTTPhelper.js
import refs from "../refs/refs.js";
import * as interfaces from "../interfaces/interfacesHttp.js";

async function getDataFromArea() {
  const baseUrl = refs.submitLinkInput.value;
  try {
    const response = await interfaces.getCards(baseUrl);
    Notiflix.Notify.success("Get data from server -  OK!");
    return response;
  } catch (error) {
    // console.error("Ошибка при выполнении запроса:", error);
    Notiflix.Notify.failure(`${error.message}`);
  }
}

async function saveDataFromArea() {
  const rawData = refs.textAreaValue.value;
  const baseUrl = refs.submitLinkInput.value;
  try {
    if (!rawData) return;
    const data = JSON.parse(rawData);
    const response = await interfaces.saveCard(baseUrl, data);
    Notiflix.Notify.success("Save data to server -  OK!");

    return response;
  } catch (error) {
    Notiflix.Notify.failure(`${error.message}`);

    // console.error("Ошибка при парсинге JSON:", error);
  }
}

async function updateDataFromArea() {
  const rawData = refs.textAreaValue.value;
  const baseUrl = refs.submitLinkInput.value;
  try {
    if (!rawData) return;
    const data = JSON.parse(rawData);

    const response = await interfaces.updateCard(baseUrl, data);
    Notiflix.Notify.success("Update data - OK!");

    return response;
  } catch (error) {
    // console.error("Ошибка при парсинге JSON:", error);
    console.log(error);
    Notiflix.Notify.failure(`${error.message}`);
  }
}

async function deleteDataFromArea() {
  const baseUrl = refs.submitLinkInput.value;
  try {
    const response = await interfaces.deleteCard(baseUrl);
    Notiflix.Notify.success("Delete data from server - OK!");
    return response;
  } catch (error) {
    // console.error("Ошибка при выполнении запроса:", error);
    Notiflix.Notify.failure(`${error.message}`);
  }
}

export {
  deleteDataFromArea,
  updateDataFromArea,
  saveDataFromArea,
  getDataFromArea,
};
