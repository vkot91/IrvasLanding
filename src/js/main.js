import "./slider";
import modal from "./parts/modal";
import tabs from "./parts/tabs";
import forms from "./parts/forms";
import calc from "./parts/calc";
import photo from "./parts/photo";
import timer from "./parts/timer";
window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  modal();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  calc(modalState);
  forms(modalState);
  photo();
  timer();
});
