let productos = [
    {id: 1, categoria: "limpieza", nombre: "Escobillon 10 cm", precio: 350, img: '/products/limpieza/escobillon.webp'},
    {id: 2, categoria: "limpieza", nombre: "Secador", precio: 300, img: '/products/limpieza/secador.webp'},
    {id: 3, categoria: "limpieza", nombre: "Pala plástica", precio: 650, img: '/products/limpieza/pala-plast.webp'},
    {id: 4, categoria: "limpieza", nombre: "Bolsa de consorcio", precio: 330, img: '/products/limpieza/bolsa-residuos.webp'},
    {id: 5, categoria: "textil", nombre: "Microfibra multiuso", precio: 700, img: '/products/textil/microfibra.webp'},
    {id: 6, categoria: "textil", nombre: "Trapo de piso", precio: 400, img: '/products/textil/trapo-de-piso.webp'},
    {id: 7, categoria: "textil", nombre: "Paño amarillo", precio: 200, img: '/products/textil/panio.webp'},
    {id: 8, categoria: "textil", nombre: "Rejilla", precio: 220, img: '/products/textil/rejilla.webp'},
    {id: 9, categoria: "liquidos", nombre: "Desodorante para piso", precio: 350, img: '/products/liquidos/des-pisos.webp'},
    {id: 10, categoria: "liquidos", nombre: "Cloro", precio: 180, img: '/products/liquidos/cloro.webp'},
    {id: 11, categoria: "liquidos", nombre: "Lavandina", precio: 210, img: '/products/liquidos/lavandina.webp'},
    {id: 12, categoria: "liquidos", nombre: "Jabon liquido", precio: 450, img: '/products/liquidos/jabon-liq.webp'},
    {id: 13, categoria: "liquidos", nombre: "Alcohol 70%", precio: 799, img: '/products/liquidos/alcohol.webp'}
]

export const mPromise = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(productos)},2000)
    })
}



