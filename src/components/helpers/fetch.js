let productos = [
    {
    id: 1,
    categoria: "limpieza",
    nombre: "Escobillon 10 cm",
    precio: 350,
    img: '/products/limpieza/escobillon.webp',
    envio: "gratis",
    stock: 15
    },


    {
    id: 2,
    categoria: "limpieza",
    nombre: "Secador",
    precio: 300,
    img: '/products/limpieza/secador.webp',
    envio: "gratis",
    stock: 15
    },


    {
    id: 3,
    categoria:
    "limpieza",
    nombre: "Pala plástica",
    precio: 650,
    img: '/products/limpieza/pala-plast.webp',
    stock: 15
    },


    {
    id: 4,
    categoria: "limpieza",
    nombre: "Bolsa de consorcio",
    precio: 330,
    img: '/products/limpieza/bolsa-residuos.webp',
    stock: 15
    },


    {
    id: 5,
    categoria: "textil",
    nombre: "Microfibra multiuso",
    precio: 700,
    img: '/products/textil/microfibra.webp',
    envio: "gratis",
    stock: 12
    },


    {
    id: 6,
    categoria: "textil",
    nombre: "Trapo de piso",
    precio: 400,
    img: '/products/textil/trapo-de-piso.webp',
    stock: 0
    },


    {
    id: 7,
    categoria: "textil",
    nombre: "Paño amarillo",
    precio: 200,
    img: '/products/textil/panio.webp',
    stock: 15
    },


    {
    id: 8,
    categoria: "textil",
    nombre: "Rejilla",
    precio: 220,
    img: '/products/textil/rejilla.webp',
    envio: "gratis",
    stock: 15
    },


    {
    id: 9,
    categoria: "liquidos",
    nombre: "Desodorante para piso",
    precio: 350,
    img: '/products/liquidos/des-pisos.webp',
    stock: 15
    },


    {
    id: 10,
    categoria: "liquidos",
    nombre: "Cloro",
    precio: 180,
    img: '/products/liquidos/cloro.webp',
    stock: 15
    },


    {
    id: 11,
    categoria: "liquidos",
    nombre: "Lavandina",
    precio: 210,
    img: '/products/liquidos/lavandina.webp',
    stock: 0
    },


    {
    id: 12,
    categoria: "liquidos",
    nombre: "Jabon liquido",
    precio: 450,
    img: '/products/liquidos/jabon-liq.webp',
    stock: 15
    },


    {
    id: 13,
    categoria: "liquidos",
    nombre: "Alcohol 70%",
    precio: 799,
    img: '/products/liquidos/alcohol.webp',
    stock: 15
    }
]

export const mPromise = (id) => {
    return new Promise((resolve, reject)=> {

        // setTimeout(()=> {

        //     resolve(id ? productos.find( prod => prod.id == parseInt(id)) : productos)},2000)

        setTimeout(()=> {
            let req = id ? productos.find( prod => prod.id == parseInt(id)) : productos
            if(req !== undefined) {
                resolve(req)
            }
            else {
                reject("Item no encontrado en la base de datos")
            }
        },2000)
     }
    )
}