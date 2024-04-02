import refs from "../refs/refs.js";

function getCards(url) {
  return axios.get(url);
}

function deleteCard(url) {
  return axios.delete(url);
}

function saveCard(url, newObject) {
  return axios.post(url, newObject);
}

function updateCard(url, updateObject) {
  return axios.put(url, updateObject);
}

function getFileSize(url) {
  return axios
    .get(url, { responseType: "blob" })
    .then((response) => {
      const blob = new Blob([response.data]);
      const fileSize = blob.size / 1000;
      refs.size.textContent = `${fileSize.toFixed(1)} KB`; // Выводим размер файла на страницу
      return fileSize;
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error("Error:", error);

      throw error; // Передаем ошибку дальше, если необходимо
    });
}

export { getCards, getFileSize, deleteCard, saveCard, updateCard };
