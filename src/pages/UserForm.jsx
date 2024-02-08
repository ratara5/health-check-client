import React from 'react'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useUsers} from '../context/UserProvider'

import {createUserRequest} from '../api/users.api'

const UserForm = () => {

    const {createUser} = useUsers()
    
    return (
        <div>
            <Formik
            initialValues={{
                /*userId:"",*/
                typeId:"",
                name:"",
                birthDate:"",
                weight:"",
                height:""

            }}
            onSubmit={async (values, actions)=>{
                console.log(values);
                createUser(values);
                actions.resetForm();
                
            }}>
                {({handleChange, handleSubmit, values, isSubmitting})=> (
                    <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto'>
                        {/*<label>userId</label>
                        <input type="number" 
                        name="userId" 
                        placeholder="Escriba Id"
                        onChange={handleChange}/>*/}

                        <label className='block'>Tipo de id</label>
                        <input type="text" 
                        name="typeId" 
                        placeholder="Escriba tipo de Id"
                        onChange={handleChange}
                        value={values.typeId}
                        className='px-2  py-1 rounded-sm w-full'/>

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

                        <label className='block'>Peso(kg)</label>
                        <input type="number" 
                        name="weight" 
                        placeholder="Escriba peso(kg)"
                        onChange={handleChange}
                        value={values.weight}
                        className='px-2  py-1 rounded-sm w-full'/>

                        <label className='block'>Talla(cm)</label>
                        <input type="number" 
                        name="height" 
                        placeholder="Escriba talla(cm)"
                        onChange={handleChange}
                        value={values.height}
                        className='px-2  py-1 rounded-sm w-full'/>

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