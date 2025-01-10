import { popupCityLink, chooseCityBtnName } from "../_vars.js";
import GraphModal from "graph-modal";

const modal = new GraphModal();

if (popupCityLink) {
  popupCityLink.forEach((item) => {
    item.addEventListener("click", () => {
      chooseCityBtnName.textContent = item.textContent;
      modal.close();
    });
  });
}
