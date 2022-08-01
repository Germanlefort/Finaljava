swal.fire("Bienvenidos!!! ")





const formulario = document.querySelector("#my-form")
const inputNombre = document.querySelector("#input-nombre")
const inputDirrecion = document.querySelector("#input-direccion")
const inputLocalidad = document.querySelector("#input-localidad")
const btnEviar = document.querySelector("#btn-enviar")


 btnEviar.addEventListener("click", () =>{
  console.log(inputNombre.value)
  console.log(inputDirrecion.value)
  console.log(inputLocalidad.value)
})

formulario.addEventListener("submit", (event) => {
 event.preventDefault()
  console.log(inputNombre.value)
  console.log(inputDirrecion.value)
  console.log(inputLocalidad.value)



const userData = {
  nombre : inputNombre.value,
  direccion : inputDirrecion.value,
  localidad: inputLocalidad.value,
  
}
 console.log(userData)



}) 

const btn1 = document.querySelector("#boton1")
const btn2 = document.querySelector("#boton2")

const clickear = () =>{
  console.log("Boton Clickeado")
} 

const alertar =() =>{
  alert("Boton clikleado!")
}

btn1.addEventListener("click", (event) => {
  
   swal.fire("Adelante, disfruta de nuestra tienda ")

   console.log(event.target)
  
 })
 
btn2.addEventListener("click", (event) => {
  
  
swal.fire("Prohíbido la venta, expendio o suministro de Bebidas Alcoholicas a menores de edad ")

   console.log(event.target)
 
 })

function guardar () {
  var nuevoRegistro = []
  nombre = '',
  direccion= '',
  localidad= '';
   


  nombre = document.getElementById("input-nombre").value;
  direccion = document.getElementById("input-direccion").value;
  localidad = document.getElementById("input-localidad").value;


  localStorage.setItem("nombre", JSON.stringify(nombre));
  localStorage.setItem("direccion", JSON.stringify(direccion));
  localStorage.setItem("localidad", JSON.stringify(localidad));
}
                          

fetch ('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}')
.then((response) => response.json())
.then((json) => response.json());
