import { useState } from "react"
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"



export const useForm = (initialForm, validateForm) => {
    const { cartList, precioTotal } = useCartContext()
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));

     }
    
    const handleChange = (e) => { 

        setForm({
            ...form,
            [e.target.name]: e.target.value
        }) 
    }

    const generarOrden = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = form;
    
        order.items = cartList.map(({ id, nombre, precio }) => ({ id, nombre, precio }))
        order.total = precioTotal();
    
        const db = getFirestore()
        const queryCollection = collection(db, "orders")
    
        //Insertar
        addDoc(queryCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))

    }

    return {
        form, 
        errors,   
        handleChange, 
        handleBlur,
        generarOrden
    }
}