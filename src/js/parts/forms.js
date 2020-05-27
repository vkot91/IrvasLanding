/* ОТПРАВЛЕНИЕ ЧЕРЕЗ ФАЙЛ БЕЗ СЕРВЕРА */
// import checkNumInputs from "./checkNumber";

// const forms = (state) => {
//   const form = document.querySelectorAll(".form"),
//     inputPhone = document.querySelectorAll("[data-phone]");
//   checkNumInputs('input[name="user_phone"]');
//   const message = {
//     loading: "Ooh, wait a minute",
//     success: "Great! We will call you soon!",
//     failure: "Something go bad :c",
//   };
//   inputPhone.forEach((phone) => {
//     phone.addEventListener("input", () => {
//       if (phone.value.match(/\D/g)) {
//         phone.style.border = "1px solid red";
//       }
//     });
//   });

//   const postData = async (url, data) => {
//     document.querySelector(".status").textContent = message.loading;
//     const result = await fetch(url, {
//       method: "POST",
//       // headers: { "Content-type": "application/json" },
//       body: data,
//     });
//     return await result.text();
//   };

//   form.forEach((item) => {
//     item.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const statusMessage = document.createElement("div");
//       statusMessage.classList.add("status");
//       item.appendChild(statusMessage);

//       const formData = new FormData(item);
//       if (item.getAttribute("data-calc") === "end") {
//         for (let key in state) {
//           formData.append(key, state[key]);
//         }
//       }
//       postData("server.php", formData)
//         .then((data) => {
//           console.log(data);
//           statusMessage.textContent = message.success;
//         })
//         .catch((error) => {
//           console.log(error);
//           statusMessage.textContent = message.failure;
//         })
//         .finally(() => {
//           item.reset();
//           setTimeout(() => {
//             statusMessage.remove();
//           }, 3000);
//         });
//     });
//   });
// };
// export default forms;

/* ОТПРАВЛЕНИЕ НА СЕРВЕР */
import checkNumInputs from "./checkNumber";
const forms = (state) => {
  const form = document.querySelectorAll(".form"),
    // inputPhone = document.querySelectorAll("[data-phone]");
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  const message = {
    loading: "Ooh, wait a minute",
    success: "Great! We will call you soon!",
    failure: "Something go bad :c",
  };
  checkNumInputs('input[name="user_phone"]');

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    });
    return await result.json();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);
      const formData = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      const obj = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });

      const json = JSON.stringify(obj);
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          statusMessage.textContent = message.success;
        })
        .catch((error) => {
          console.log(error);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          item.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};
export default forms;
