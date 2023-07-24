import React, { useState, useEffect } from 'react';
import { useForm, Controller, set, SetFieldValue } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormComponent = (Props) => {
  const [user, setUser] = useState()
  const [teste, setTeste] = useState({
    // Your initial state properties here
  });

  useEffect(() => {
    const getType = async () => {
      setUser(JSON.parse(await AsyncStorage.getItem('@usuario')) ?? {message: false})
    }

    getType();
  }, []);

  useEffect(() => {
    if (user) {
      getInfos();
    }
  }, [user]);

  const { handleSubmit, control, reset, setValue } = useForm();

  const getInfos = async () => {
    try {
      const response = await axios.put("http://10.254.4.132:3005/api/getinfo", { usuario: user.usuario, cubo: "users" });
      const information = response.data;
      setTeste(information);

      for (const key in information) {
        const value = information[key];
        if (key === "data_nasc") {
          setValue(key, value.substring(0, 10));
        } else {
          setValue(key, value);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    console.log(data, Props.par);
    console.log(teste);
    reset();
  };

  return (
    <form   onSubmit={handleSubmit(onSubmit)}>
    
    <div>
        <label>Usuário:</label>
        <Controller
          name="usuario"
          control={control}
          defaultValue={teste.usuario }
          render={({ field }) => <input type="number" {...field} />}
        />
      </div>

      <div>
        <label>Nome:</label>
        <Controller
          name="nome"
          control={control}
          // value={teste.nome}
          render={({ field }) => <input type="text" value={teste.nome} {...field}/>}
        />
      </div>

      <div>
        <label>Nome Usual:</label>
        <Controller
          name="nome_usual"
          control={control}
          defaultValue={teste.nome_usual }
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Data de Nascimento:</label>
        <Controller
          name="data_nasc"
          control={control}
          defaultValue={teste.data_nasc }
          render={({ field }) => <input type="date" {...field} />}
        />
      </div>

      <div>
        <label>Telefone:</label>
        <Controller
          name="fone"
          control={control}
          defaultValue={teste.fone }
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Religião:</label>
        <Controller
          name="religiao"
          control={control}
          defaultValue={teste.religiao }
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Batizado:</label>
        <Controller
          name="batizado"
          control={control}
          // defaultValue={teste.batizado }
          render={({ field }) => teste.batizado !== false ? <Switch size='small' checked type="checkbox" {...field} /> : <Switch size='small'  type="checkbox" {...field}/>}
        />
      </div>

      <div>
        <label>Primeira Comunhão:</label>
        <Controller
          name="primeira_comunhao"
          control={control}
          defaultValue={teste.primeira_comunhao }
          render={({ field }) => teste.primeira_comunhao !== false ? <Switch size='small' checked type="checkbox" {...field} /> : <Switch size='small'  type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Crismado:</label>
        <Controller
          name="crismado"
          control={control}
          defaultValue={teste.crismado }
          render={({ field }) => teste.crismado !== false ? <Switch size='small' checked type="checkbox" {...field} /> : <Switch size='small'  type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Grau de Instrução:</label>
        <Controller
          name="grau_instrucao"
          control={control}
          defaultValue={teste.grau_instrucao }
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <Button size="small" variant="contained" endIcon={<AddIcon />} >CARREGAR</Button>
      <Button size="small" variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}}  >SALVAR</Button>
      
      </div>
    </form>
  );
};

export default FormComponent;
