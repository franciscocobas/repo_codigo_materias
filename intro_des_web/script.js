

let registrarUsuario = () => {

  let formulario = document.querySelector("form[name='formulario']")

  let nombre = formulario.nombre.value;
  let edad = formulario.edad.value;
  let curso = formulario.curso.value;
  let ingreso = formulario.fecha.value;

  console.log(nombre, edad, curso, ingreso);

}
