import React from 'react';
import PatternFrom from '../components/PatternForm/PatternForm';

function FormScreen() {

    const elements = {"title": "Dados pessoais Marido", "content": "conteudo" }
    const elem = {"title": "Dados da esposa", "content": "content.tv"}
  
  return (
    <div>
        <PatternFrom elements={elements}></PatternFrom>
        <PatternFrom elements={elem}></PatternFrom>
   </div>
  );
}

export default FormScreen;
