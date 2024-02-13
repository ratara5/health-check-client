import React from 'react';
import { useEffect, useState } from 'react';
import {Form, Field, Formik, ErrorMessage} from 'formik'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useUsers} from '../context/UserProvider'
import {useParams, useNavigate} from 'react-router-dom'


const UserForm = () => {

    const {createUser, loadUser, updateUser} = useUsers()
    const [user, setUser] = useState([
        {
            typeId: "",
            userId: "",
            name: "",
            birthDate: "",
        }
    ])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        
        const loadUserUseEffect = async () => {
            if(params.id){
                const user = await loadUser(params.id.split("-")[0], params.id.split("-")[1])
                setUser({
                    typeId: user.typeId,
                    userId: user.userId,
                    name: user.name,
                    birthDate: user.birthDate,
                });
                console.log(user);
            }
        }
        loadUserUseEffect()        
    },[])


    
    return (
        <div>
            <h1 className='text-4xl text-white font-bold text-center'>{params.id ? "Editar Usuario" : "Crear Usuario"}</h1>
            <Formik
            initialValues={params.id ? user : {
                typeId: "",
                userId: "",
                name:"",
                birthDate:""
            } }

            enableReinitialize={true}
            
            onSubmit={async (values, actions)=>{
                if(params.id){
                    await updateUser(params.id.split("-")[0], params.id.split("-")[1], values)
                    navigate("/")
                } else {
                    createUser(values);
                    console.log(values);
                }
                actions.resetForm(); 
            }}
            >
                {({handleChange, handleSubmit, values, isSubmitting})=> (
                    <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto'>
                        {/*<label>userId</label>
                        <input type="number" 
                        name="userId" 
                        placeholder="Escriba Id"
                        onChange={handleChange}/>*/}

                        {/*{if(param.id){*/}
                            <>
                                <label className='block'>Tipo de id</label>
                                <input type="text" 
                                name="typeId" 
                                placeholder="Escriba tipo de Id"
                                onChange={handleChange}
                                value={values.typeId}
                                className='px-2  py-1 rounded-sm w-full'/>

                                <label className='block'>Número de id</label>
                                <input type="text" 
                                name="userId" 
                                placeholder="Escriba número de Id"
                                onChange={handleChange}
                                value={values.userId}
                                className='px-2  py-1 rounded-sm w-full'/>
                            </>
                        {/*}
                        }*/}

                        <label className='block'>Nombre</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Escriba nombre"
                        onChange={handleChange}
                        value={values.name}
                        className='px-2  py-1 rounded-sm w-full'/>

                        {/*<label>Fecha de Nacimiento</label>
                        <input type="text" 
                        name="birthDate" 
                        placeholder="Escriba fecha de nacimiento"
                        onChange={handleChange}/>*/}

                        <div>
                            <label htmlFor="birthDate" className='block'>Fecha de nacimiento:</label>
                            <Field name="birthDate" >
                                {({ field, form }) => (
                                <DatePicker
                                    id="birthDate"
                                    {...field}
                                    selected={field.value}
                                    onChange={(date) => form.setFieldValue(field.name, date)}
                                    value={values.birthDate}
                                />
                                )}
                            </Field>
                            <ErrorMessage name="birthDate" component="div" />
                        </div>

                        {/*<label className='block'>Peso(kg)</label>
                        <input type="number" 
                        name="weight" 
                        placeholder="Escriba peso(kg)"
                        onChange={handleChange}
                        value={values.weight}
                                className='px-2  py-1 rounded-sm w-full'/>*/}

                        {/*<label className='block'>Talla(cm)</label>
                        <input type="number" 
                        name="height" 
                        placeholder="Escriba talla(cm)"
                        onChange={handleChange}
                        value={values.height}
                            className='px-2  py-1 rounded-sm w-full'/>*/}

                        <button 
                        type="submit" disabled={isSubmitting} 
                        className='block bg-green-500 px-2 py-1 text-white w-full rounded-md my-2'>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserForm