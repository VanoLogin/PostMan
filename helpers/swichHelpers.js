import {
  deleteDataFromArea,
  updateDataFromArea,
  saveDataFromArea,
  getDataFromArea,
} from "./HTTPhelper.js";

export default async function switchForTypeOfRequest(typeOfRequest) {
  switch (typeOfRequest.toLowerCase()) {
    case "get":
      return await getDataFromArea();

    case "post":
      return await saveDataFromArea();

    case "delete":
      return await deleteDataFromArea();

    case "put":
      return await updateDataFromArea();

    default:
      throw new Error("Unsupported request type");
  }
}
