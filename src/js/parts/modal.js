/*   FIRST   */

// function modal() {
//   const modalPhone = document.querySelector(".popup");
//   const modalEnginner = document.querySelector(".popup_engineer");
//   const modalClose = document.querySelectorAll(".popup_close");
//   const openEngineer = document.querySelector(".popup_engineer_btn");
//   const openPhone = document.querySelectorAll(".phone_link");
//   function showModal(e) {
//     e.preventDefault();
//     if (e.target.classList.contains("popup_engineer_btn")) {
//       modalEnginner.style.display = "block";
//     } else if (e.target.classList.contains("phone_link")) {
//       modalPhone.style.display = "block";
//     }
//     document.body.style.overflow = "hidden";

//   }
//   function hideModal() {
//     modalPhone.style.display = "none";
//     modalEnginner.style.display = "none";
//     document.body.style.overflow = "";
//   }

//   openEngineer.addEventListener("click", showModal);
//   openPhone.forEach((item) => {
//     item.addEventListener("click", showModal);
//   });
//   modalClose.forEach((item) => {
//     item.addEventListener("click", hideModal);
//   });
//   window.addEventListener("click", (e) => {
//     if (
//       e.target.classList.contains("popup") ||
//       e.target.classList.contains("popup_engineer")
//     ) {
//       hideModal();
//     }
//   });
// }

/* SECOND */

const modal = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
    scroll = calcScroll()
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");
    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    window.addEventListener("click", (e) => {
      if (e.target == modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  // showModalByTime(".popup", 60000);
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
};

export default modal;
