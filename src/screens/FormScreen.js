import React from 'react';
import PatternFrom from '../components/PatternForm/PatternForm';
import Navbar from '../components/Navbar/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormComponent from '../components/Formulario';
import ProfissaoForm from '../components/formularios/Profissao';
import Dependentes from '../components/formularios/Dependentes';
import { background } from '@chakra-ui/react';
import MidscTile from '../components/menus/Midscreen';

function FormScreen() {

   
  
  return (
    <div className='background'>
        <Navbar/>
        <MidscTile content={<Dependentes/>} title="Cadastrar Dependentes" ></MidscTile>
   
       
        
   </div>
  );
}

export default FormScreen;
