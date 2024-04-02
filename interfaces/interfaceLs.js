const POSTMAN_LS_KEY = {
  submitInput: "submit_input",
  typeOfRequest: "type_Request"
};

function loadLs(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || undefined;
  } catch (err) {
    console.error(`Parsing error: ${err.message}`);
  }
}
function saveLs(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Stringify error: ${error.message}`);
  }
}
function removeLs(key) {
  localStorage.removeItem(key);
}

export { loadLs, saveLs, removeLs, POSTMAN_LS_KEY };
