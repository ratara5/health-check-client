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
            /*userId:"",*/
            typeId:"",
            name:"",
            birthDate:"",
            weight:"",
            height:""

        }}
        onSubmit={async (values, actions)=>{
            console.log(values)
            try {
                const response = await createUserRequest(values)
                console.log(response)
                actions.resetForm();
            } catch (error) {
                console.log(error)
            }
            
        }}>
            {({handleChange, handleSubmit, values, isSubmitting})=> (
                <Form onSubmit={handleSubmit}>
                    {/*<label>userId</label>
                    <input type="number" 
                    name="userId" 
                    placeholder="Escriba Id"
                    onChange={handleChange}/>*/}

                    <label>Tipo de id</label>
                    <input type="text" 
                    name="typeId" 
                    placeholder="Escriba tipo de Id"
                    onChange={handleChange}
                    value={values.typeId}/>

                    <label>Nombre</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Escriba nombre"
                    onChange={handleChange}
                    value={values.name}/>

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
                                value={values.birthDate}
                            />
                            )}
                        </Field>
                        <ErrorMessage name="birthDate" component="div" />
                    </div>

                    <label>Peso(kg)</label>
                    <input type="number" 
                    name="weight" 
                    placeholder="Escriba peso(kg)"
                    onChange={handleChange}
                    value={values.weight}/>

                    <label>Talla(cm)</label>
                    <input type="number" 
                    name="height" 
                    placeholder="Escriba talla(cm)"
                    onChange={handleChange}
                    value={values.height}/>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save"}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default UserForm