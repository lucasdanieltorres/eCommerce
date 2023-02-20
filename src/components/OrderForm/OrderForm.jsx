import React from 'react'
import { useForm } from '../helpers/useForm'

const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido "
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios"
    }
    
    if(!form.phone.trim()) {
        errors.phone = "El campo 'Teléfono' es requerido "
    }
    
    if(!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido "
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto "
    }

    if(!form.validarMail.trim()) {
        errors.validarMail = "Debe validar su correo"
    } else if (form.validarMail.trim() !== form.email.trim()){
        errors.validarMail = "Los correos deben ser idénticos"
    }


    return errors;
}

const initialForm = {
    name: '',
    phone: '',
    email: '',
    validarMail: ''
}

function OrderForm() {
    const {
        form,
        errors,
        submitForm,
        handleChange,
        handleBlur,
        generarOrden } = useForm(initialForm, validationsForm)

        



    return (
        <div>

            <h2>Formulario de contacto</h2>
            <form onSubmit={generarOrden} className="form-control d-flex flex-column mx-2 mt-1 mb-5">

                <label> Ingrese su nombre </label>
                <input className="my-2"
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                />
                {errors.name && <p className='text-danger-emphasis'>{errors.name}</p>}

                <label> Ingrese su teléfono </label>
                <input className="my-2"
                    type="number"
                    name="phone"
                    placeholder="Ingrese su nombre"
                    value={form.phone} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                />
                {errors.phone && <p className='text-danger-emphasis'>{errors.phone}</p>}

                <label> Ingrese su E-mail </label>
                <input className="my-2"
                    type="email"
                    name="email"
                    placeholder="Ingrese su E-mail"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required

                />
                {errors.email && <p className='text-danger-emphasis'>{errors.email}</p>}

                <label> Re-ingrese su E-mail </label>
                <input className="my-2"
                    type="email"
                    name="validarMail"
                    placeholder="Re-ingrese su E-mail"
                    value={form.validarMail}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    required
                />
                {errors.validarMail && <p className='text-danger-emphasis'>{errors.validarMail}</p>}

                <button className="btn btn-outline-success" type="submit">Generar orden</button>
                
            {   submitForm && <span className='text-success my-2 mx-auto'> Orden cargada con éxito!</span> }
            </form>
        </div>
    )
}

export default OrderForm