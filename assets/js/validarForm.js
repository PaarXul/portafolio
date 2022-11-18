const formulario = document.querySelector("[data-form]");
const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
const asunto = document.querySelector("[data-asunto]");
const mensaje = document.querySelector("[data-mensaje]");


const validacionExpresiones = {
  nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
  numeros: /^\d{1,40}/,
};

const validarFormulario = (e)=>{
    
}



formulario.addEventListener('submit',(e) =>{
  e.preventDefault();
}
)