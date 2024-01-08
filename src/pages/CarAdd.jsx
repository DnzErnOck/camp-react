import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import {number, object, string} from "yup";
import ITextInput from '../utilities/customFormControls/ITextInput';

export default function CarAdd() {
    const initialValues = {
        modelId:0,
        year:0
    }
    const shema =object({
        modelId:number().required("Model Zorunlu"),
        year:number().required("Araba yılı zorunludur.")
    })
  return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={shema}
            onSubmit={(values) => {
                
            }}
        >
        <Form className='ui form'>
            <ITextInput name="modelId" placeholder="Model Id"/>
            {/* <FormField>
                <Field name="modelId" placeholder="Model Id" />
                <ErrorMessage name='modelId' render={error =>
                    <Label pointing basic color='red' content={error}></Label>
                }></ErrorMessage>
            </FormField> */}
            <FormField>
                <Field name="year" placeholder="Araba Yılı" />
                <ErrorMessage name='year' render={error =>
                    <Label pointing basic color='red' content={error}></Label>
                }></ErrorMessage>
            </FormField>
            <Button color='green' type='submit'>Ekle</Button>
        </Form> 
        </Formik>
    </div>
  )
}
