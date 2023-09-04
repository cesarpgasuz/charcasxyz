import { categoria } from "../cat.js";

export function extractoCategoria(id){
   
    const idCategoria = id;
    
    const infoCategoria = categoria.filter(datos => datos.id === idCategoria);
    
   
    console.log(infoCategoria)
    // console.log(infoCategoria)

    const {extracto} = infoCategoria[0] || infoCategoria;

    return extracto;

}


export function subcategorias(id){


    const subCategory = categoria.filter(datos => datos.id === id);

    const {subcategorias} = subCategory[0];

    if(subcategorias){

        // const subCategoria = subcategorias.map(dato =>  dato.nombre)
        return [subcategorias];

    }
    // }else{
    //     console.log('no hay subcategorias d')
    // }
   
    
    


    

    

}