import React from 'react'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {createUserRequest} from '../api/users.api'

const UserForm = () => {
  return (
    <div>
        <Formik
        initialValues={{
            /*id:"",*/
            typeId:"",
            name:"",
            birthDate:"",
            weight:"",
            height:""

        }}
        onSubmit={async (values)=>{
            console.log(values)
            await createUserRequest(values)
        }}>
            {({handleChange, handleSubmit})=> (
                <Form onSubmit={handleSubmit}>
                    {/*<label>Id</label>
                    <input type="number" 
                    name="id" 
                    placeholder="Escriba Id"
                    onChange={handleChange}/>*/}

                    <label>Tipo de id</label>
                    <input type="text" 
                    name="typeId" 
                    placeholder="Escriba tipo de Id"
                    onChange={handleChange}/>

                    <label>Nombre</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Escriba nombre"
                    onChange={handleChange}/>

                    {/*<label>Fecha de Nacimiento</label>
                    <input type="text" 
                    name="birthDate" 
                    placeholder="Escriba fecha de nacimiento"
                    onChange={handleChange}/>*/}

                    <div>
                        <label htmlFor="birthDate">Fecha de nacimiento:</label>
                        <Field name="birthDate">
                            {({ field, form }) => (
                            <DatePicker
                                id="birthDate"
                                {...field}
                                selected={field.value}
                                onChange={(date) => form.setFieldValue(field.name, date)}
                            />
                            )}
                        </Field>
                        <ErrorMessage name="birthDate" component="div" />
                    </div>

                    <label>Peso(kg)</label>
                    <input type="number" 
                    name="weight" 
                    placeholder="Escriba peso(kg)"
                    onChange={handleChange}/>

                    <label>Talla(cm)</label>
                    <input type="number" 
                    name="height" 
                    placeholder="Escriba talla(cm)"
                    onChange={handleChange}/>

                    <button type="submit">
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default UserForm