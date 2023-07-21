import React from 'react';
import PatternFrom from '../components/PatternForm/PatternForm';
import Navbar from '../components/Navbar/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormComponent from '../components/Formulario';
import ProfissaoForm from '../components/formularios/Profissao';
import Dependentes from '../components/formularios/Dependentes';

function FormScreen() {

    const elements = {"title": "Dados pessoais Marido", "content": <FormComponent par="marido"/> }
    const elem = {"title": "Dados pessoais Esposa", "content": <FormComponent par="esposa"/>}
    const profissaoele = {"title": "Profissao Marido", "content": <ProfissaoForm par="marido"/>}
    const profissaoela = {"title": "Profissao Esposa", "content": <ProfissaoForm par="esposa"/>}
    const dependentes = {"title": "Dependentes", "content": <Dependentes/>}
  
  return (
    <div className='background'>
        <Navbar/>
        <PatternFrom elements={elements}> </PatternFrom>
        <PatternFrom elements={elem}></PatternFrom>
        <PatternFrom elements={profissaoele} />
        <PatternFrom elements={profissaoela} />
        <PatternFrom elements={dependentes}/>

       
   </div>
  );
}

export default FormScreen;
