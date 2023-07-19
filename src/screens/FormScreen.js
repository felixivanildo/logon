import React from 'react';
import PatternFrom from '../components/PatternForm/PatternForm';
import Navbar from '../components/Navbar/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormComponent from '../components/Formulario';

function FormScreen() {

    const elements = {"title": "Dados pessoais Marido", "content": <FormComponent/> }
    const elem = {"title": "Dados da esposa", "content": "content.tv"}
  
  return (
    <div className='background'>
        <Navbar/>
        <PatternFrom elements={elements}> </PatternFrom>
        <PatternFrom elements={elem}></PatternFrom>

       
   </div>
  );
}

export default FormScreen;
