let legajoActivo="";

function login(){
const val=document.getElementById("legajoInput").value.trim();
if(!val)return alert("Ingresá legajo");

legajoActivo=val;

document.getElementById("legajoLabel").innerText=val;
document.getElementById("login").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");
}

/* CAMPOS DINAMICOS */

function mostrarCampos(){

const tipo=document.getElementById("tipo").value;
const div=document.getElementById("campos");

div.innerHTML="";

if(tipo==="cambio_horario"){
div.innerHTML=`
<label>Fecha</label>
<input type="date" id="fecha">
<label>Hora original</label>
<input type="time" id="hora">
<label>Hora nueva</label>
<input type="time" id="hora2">
`;
}

if(tipo==="cambio_franco"){
div.innerHTML=`
<label>Fecha nuevo franco</label>
<input type="date" id="fecha">
<label>Horario que trabaja ese día</label>
<input type="time" id="hora">
`;
}

if(tipo==="fichada_manual"){
div.innerHTML=`
<label>Fecha</label>
<input type="date" id="fecha">
<label>Hora</label>
<input type="time" id="hora">
<textarea id="detalle" placeholder="Motivo"></textarea>
`;
}

if(tipo==="retiro_anticipado"){
div.innerHTML=`
<label>Fecha</label>
<input type="date" id="fecha">
<label>Hora retiro</label>
<input type="time" id="hora">
`;
}

}


/* GUARDAR */

async function guardar(){

const tipo=document.getElementById("tipo").value;
if(!tipo)return alert("Seleccionar tipo");

const payload={
action:"crear",
legajo:legajoActivo,
tipo:tipo,
fecha:document.getElementById("fecha")?.value||"",
hora:document.getElementById("hora")?.value||"",
detalle:document.getElementById("detalle")?.value||""
};

const r=await api(payload);

if(r.status==="ok"){
alert("Guardado");
location.reload();
}else{
alert(r.message);
}

}


/* LISTAR */

async function cargarRegistros(){

const datos=await api({
action:"listar",
legajo:legajoActivo
});

const cont=document.getElementById("lista");
cont.innerHTML="";

datos.forEach(r=>{

cont.innerHTML+=`
<div class="item">
<b>${r.tipo}</b><br>
${r.fecha||""} ${r.hora||""}<br>
${r.detalle||""}

<div class="acciones">
<button onclick="editar('${r.id}')">Editar</button>
<button onclick="eliminarReg('${r.id}')">Eliminar</button>
</div>

</div>
`;

});

}


/* ELIMINAR */

async function eliminarReg(id){

if(!confirm("Eliminar?"))return;

await api({
action:"eliminar",
id:id
});

cargarRegistros();
}


/* EDITAR */

async function editar(id){

const texto=prompt("Nuevo detalle");
if(texto===null)return;

await api({
action:"editar",
id:id,
tipo:"editado",
fecha:"",
hora:"",
detalle:texto
});

cargarRegistros();
}