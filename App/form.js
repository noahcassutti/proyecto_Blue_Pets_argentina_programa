const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/,
  lugar: /^[A-Za-z0-9\s]{4,99}$/,
};

const campos = {
  nombre: false,
  apellido: false,
  email: false,
  telefono: false,
  provincia: false,
  ciudad: false,
};

// VALIDACION DEL FORMULARIO
var tipoAnimal = document.getElementsByName('form-check-opcion')


const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        document
          .getElementById("grupo-nombre")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-nombre")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-nombre i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-nombre i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-nombre .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["nombre"] = true;
      } else {
        document
          .getElementById("grupo-nombre")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-nombre")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-nombre i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-nombre i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-nombre .form-input-error")
          .classList.add("form-input-error-activo");
        campos["nombre"] = false;
      }
      break;
    case "apellido":
      if (expresiones.nombre.test(e.target.value)) {
        document
          .getElementById("grupo-apellido")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-apellido")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-apellido i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-apellido i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-apellido .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["apellido"] = true;
      } else {
        document
          .getElementById("grupo-apellido")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-apellido")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-apellido i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-apellido i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-apellido .form-input-error")
          .classList.add("form-input-error-activo");
        campos["apellido"] = false;
      }
      break;
    case "email":
      if (expresiones.email.test(e.target.value)) {
        document
          .getElementById("grupo-mail")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-mail")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-mail i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-mail i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-mail .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["mail"] = true;
      } else {
        document
          .getElementById("grupo-mail")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-mail")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-mail i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-mail i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-mail .form-input-error")
          .classList.add("form-input-error-activo");
        campos["mail"] = false;
      }
      break;
    case "provincia":
      if (expresiones.lugar.test(e.target.value)) {
        document
          .getElementById("grupo-provincia")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-provincia")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-provincia i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-provincia i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-provincia .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["provincia"] = true;
      } else {
        document
          .getElementById("grupo-provincia")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-provincia")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-provincia i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-provincia i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-provincia .form-input-error")
          .classList.add("form-input-error-activo");
        campos["provincia"] = false;
      }
      break;
    case "ciudad":
      if (expresiones.lugar.test(e.target.value)) {
        document
          .getElementById("grupo-ciudad")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-ciudad")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-ciudad i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-ciudad i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-ciudad .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["ciudad"] = true;
      } else {
        document
          .getElementById("grupo-ciudad")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-ciudad")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-ciudad i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-ciudad i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-ciudad .form-input-error")
          .classList.add("form-input-error-activo");
        campos["ciudad"] = false;
      }
      break;
    case "telefono":
      if (expresiones.telefono.test(e.target.value)) {
        document
          .getElementById("grupo-telefono")
          .classList.remove("form-grupo-incorrecto");
        document
          .getElementById("grupo-telefono")
          .classList.add("form-grupo-correcto");
        document
          .querySelector("#grupo-telefono i")
          .classList.remove("bi-x-circle-fill");
        document
          .querySelector("#grupo-telefono i")
          .classList.add("bi-check-circle-fill");
        document
          .querySelector("#grupo-telefono .form-input-error")
          .classList.remove("form-input-error-activo");
        campos["telefono"] = true;
      } else {
        document
          .getElementById("grupo-telefono")
          .classList.add("form-grupo-incorrecto");
        document
          .getElementById("grupo-telefono")
          .classList.remove("form-grupo-correcto");
        document
          .querySelector("#grupo-telefono i")
          .classList.add("bi-x-circle-fill");
        document
          .querySelector("#grupo-telefono i")
          .classList.remove("bi-check-circle-fill");
        document
          .querySelector("#grupo-telefono .form-input-error")
          .classList.add("form-input-error-activo");
        campos["telefono"] = false;
      }
      break;
  }
};

// EVENT LISTENERS
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    campos.nombre &&
    campos.apellido &&
    campos.telefono &&
    campos.provincia &&
    campos.ciudad 
  ) {
    formulario.reset();

    document
      .getElementById("form-mensaje-exito")
      .classList.add("form-mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("form-mensaje-exito")
        .classList.remove("form-mensaje-exito-activo");
    }, 3000);
    document.querySelectorAll(".form-grupo-correcto").forEach((icono) => {
      icono.classList.remove("form-grupo-correcto");
    });
  } else {
    document.getElementById('form-mensaje').classList.add('form-mensaje-activo')
  }
});

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});