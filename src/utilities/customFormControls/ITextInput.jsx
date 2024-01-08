import { useField } from 'formik'
import React from 'react'

export default function ITextInput({...props}) {
    const [field,meta] = useField(props)
    console.log(field);
  return (
    <></>
  )
}
