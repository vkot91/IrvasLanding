import checkNumInputs from "./checkNumber";

const calc = (state) => {
  let windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");
  /* DEFAULT PARAMETRES */
  state.window = 0;
  state.width = "";
  state.height = "";
  state.type = "tree";
  state.profile = "cold";

  function bindActionToElems(event, element, property) {
    element.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[property] = i;
            break;
          case "INPUT":
            /* CHECKBOX */
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[property] = "Cold") : (state[property] = "Hot");
              element.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              /* INPUTS WIDTH AND HEIGHT */
              state[property] = item.value;
            }
            break;
          case "SELECT":
            state[property] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "window");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};
export default calc;
