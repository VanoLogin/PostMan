// refs.js
export default {
  requestType: document.getElementById("type"),
  requestLink: document.getElementById("request"),

  form: document.getElementById("form-submit"),
  selectTypeRequest: document.getElementById("type-request"),

  submitLinkInput: document.getElementById("input-link"),

  tBody: document.getElementById("tbody"),
  inputPlaceholders: document.querySelectorAll(".input-placeholder"),
  status: document.getElementById("status"),
  size: document.getElementById("size"),
  time: document.getElementById("time"),

  dataContainer: document.getElementById("data-container"),

  textAreaValue: document.getElementById("textAreaValue"),
  btnTextareaSubmit: document.getElementById("btnTextareaSubmit"),
  badRequestMessage: document.querySelector("bad-request"),
};
