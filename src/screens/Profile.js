import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FormComponent from "../components/Formulario"
import PatternFrom from "../components/PatternForm/PatternForm";
import ProfissaoForm from "../components/formularios/Profissao";
import Dependentes from "../components/formularios/Dependentes";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Divisionbar from "../components/assets/Divisinbar";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState();
  const [information, setInformation] = useState([{}]);

  useEffect(() => {
    const fetchUser = async () => {
      const values = await JSON.parse(await AsyncStorage.getItem('@usuario')) ?? { message: false };
      setUser(values);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      setInformation(user);

    }
  }, [user]);

  const elements = { "title": "Dados pessoais ", "content": <FormComponent par="marido" /> }
  const profissaoele = { "title": "Profissao ", "content": <ProfissaoForm par="marido" /> }

  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="MediumCLM">
        <div style={{ alignItems: "flex-start", marginLeft: "10%", display: "flex", flexDirection: "column", width: "80%", height: "100%" }}>
          <div style={{ marginTop: "5%", alignItems: "center", marginLeft: "10%", display: "flex", flexDirection: "column", width: "80%", height: "100%" }}>
            <div className="img"></div>
            <div className="nome"></div>
            <p> {information.nome}</p>
            <div className="endereço">{information.endereco}</div>
            <Divisionbar/>
            <PatternFrom elements={elements}> </PatternFrom>
            <PatternFrom elements={profissaoele}> </PatternFrom> 
             {/* <Dependentes></Dependentes> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
