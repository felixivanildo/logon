import React from 'react';
import PatternFrom from '../components/PatternForm/PatternForm';
import Navbar from '../components/Navbar/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormComponent from '../components/Formulario';
import ProfissaoForm from '../components/formularios/Profissao';
import Dependentes from '../components/formularios/Dependentes';
import { background } from '@chakra-ui/react';

function FormScreen() {

    const elements = {"title": "Dados pessoais Marido", "content": <FormComponent par="marido"/> }
    const elem = {"title": "Dados pessoais Esposa", "content": <FormComponent par="esposa"/>}
    const profissaoele = {"title": "Profissao Marido", "content": <ProfissaoForm par="marido"/>}
    const profissaoela = {"title": "Profissao Esposa", "content": <ProfissaoForm par="esposa"/>}
    const dependentes = {"title": "Dependentes", "content": <Dependentes/>}
  
  return (
    <div className='background'>
        <Navbar/>
        <h1 style={{textShadow: '1px 1px 2px black', fontFamily: "Garamond", color: "white" ,display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "5%",    textJustify: "inter-word"}}>
        No aconchego das palavras divinas, casais se reúnem em um encontro com Cristo, fortalecendo laços e renovando o amor mútuo. Guiados pela fé, compartilham experiências e aprendizados, fortalecendo-se como um só coração em busca da plenitude do amor de Deus. Unidos, trilham o caminho da vida com esperança e alegria, inspirados pelo encontro transformador com o Salvador.
        </h1>
        <div className='MediumCLM'>
        <h1 className='defaultTimesRoman'>ENCONTRO DE CASAIS</h1>
        <div >
        <PatternFrom elements={elements}> </PatternFrom>
        <PatternFrom elements={elem}></PatternFrom>
        <PatternFrom elements={profissaoele} />
        <PatternFrom elements={profissaoela} />
        <PatternFrom elements={dependentes}/>
        </div>
        </div>
   </div>
  );
}

export default FormScreen;
