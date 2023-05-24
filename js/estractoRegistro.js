import { categoria } from "../cat.js";

export function seleccionarCat(id){
   
    const idCategoria = id;
    
    const infoCategoria = categoria.filter(datos => datos.id === idCategoria);

    console.log(infoCategoria)

    const {extracto} = infoCategoria[0] || infoCategoria;

    return extracto;

}

