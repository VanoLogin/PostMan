import refs from "../refs/refs.js";

function createRowMarkup(id, key = "", value = "") {
  return `<tr data-id="${id}">
          <td>
            <input
              type="text"
              name="key"
              placeholder="key"
              class="input-placeholder"
              value="${key}"
            />
          </td>
          <td>
            <input
              type="text"
              name="value"
              placeholder="value"
              class="input-placeholder"
              value="${value}"
            />
          </td>
        </tr>`;
}


export default function insertRow(id, key = "", value = "") {
  refs.tBody.insertAdjacentHTML("beforeend", createRowMarkup(id, key, value));
}
