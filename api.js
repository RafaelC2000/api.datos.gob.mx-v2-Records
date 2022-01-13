$tabla=document.querySelector('.tabla')
$input=document.getElementById('input')
$boton=document.querySelector('.btn')
$botonB=document.querySelector('.btn-buscar')
$botonO=document.querySelector('.btn-buscar2')
$limpiar=document.querySelector('.limpiar')
$limpiarB=document.querySelector('.limpiar2')
$mensaje=document.querySelector('.mensaje')
$elemento=document.querySelector('.elementoEncontrado')

const api = async (i) => {
    const resp = await fetch('https://api.datos.gob.mx/v2/Records')
    const resp2 = await resp.json()

    $tabla.innerHTML += `
    <tr>
        <td><span>${i}</span></td>
        <td><span>Id:</span> ${resp2.results[i]._id}</td> 
        <td><span>Ocid:</span> ${resp2.results[i].ocid}</td>
    </tr>
    ` 
}
$boton.addEventListener('click', ()=>{
    let cantidad = ($input.value);
    
    for (let i = 0; i < cantidad; i++ ){
        api(i)
    }
})
$limpiar.addEventListener('click', ()=>{
    $tabla.innerHTML = `
    <tr>
        
    </tr>
    ` 
})
$limpiarB.addEventListener('click', ()=>{
    $tabla.innerHTML = `
    <tr>
        
    </tr>
    ` 
    $mensaje.innerHTML = ``
})
const buscarApi = async (id) => {
    const resp = await fetch('https://api.datos.gob.mx/v2/Records')
    const resp2 = await resp.json()

    resp2.results.forEach(ele=>{
        if(ele._id==id){
                $mensaje.innerHTML=`
                    <span>Registro:</span> ${ele._id} <br>
                    <span>Encontrado con excito!!!</span>
                `
                $tabla.innerHTML += `
                    <tr>
                        <td><span>Resultado</span></td>
                        <td><span>Id:</span> ${id}</td> 
                        <td><span>Ocid:</span> ${ele.ocid}</td>
                    </tr>
                    ` 
            }
    })
}
$botonB.addEventListener('click', ()=>{
    let id = document.getElementById('buscar').value
    console.log("buscar");
    console.log(id);
    buscarApi(id)
})
//------------------------Funciona ------------------------------
const buscarOcid = async (ocid) => {
    const resp = await fetch('https://api.datos.gob.mx/v2/Records')
    const resp2 = await resp.json()

    resp2.results.forEach(ele=>{
        if(ele.ocid==ocid){
                $mensaje.innerHTML=`
                    <span>Registro:</span> ${ele.ocid} <br>
                    <span>Encontrado con excito!!!</span>
                `
                $tabla.innerHTML += `
                    <tr>
                        <td><span>Resultado</span></td>
                        <td><span>Id:</span> ${ele._id}</td> 
                        <td><span>Ocid:</span> ${ocid}</td>
                    </tr>
                    ` 
            }
    })
}
$botonO.addEventListener('click', ()=>{
    let ocid = document.getElementById('buscar2').value
    console.log("buscar");
    console.log(ocid);
    buscarOcid(ocid)
})