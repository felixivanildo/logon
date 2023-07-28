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

  const onSubmit = async (data) => {
    await axios.post("http://10.254.4.132:3005/api/fill", {data: data, sexo: Props.par});
    console.log(teste);
    reset();
  };

  return (
    <form   onSubmit={handleSubmit(onSubmit)}>
    
    <div>
        <Controller
          name="usuario"
          control={control}
          // defaultValue={teste.usuario }
          render={({ field }) =><TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
        />
      
      </div>

      <div>
        <Controller
          name="nome"
          control={control}
          // value={teste.nome}
          render={({ field }) => <TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div>
        <Controller
          name="nome_usual"
          control={control}
          defaultValue={teste.nome_usual }
          render={({ field }) => <TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div>
        <Controller
          name="data_nasc"
          control={control}
          defaultValue={teste.data_nasc }
          render={({ field }) => <input type='date' {...field}/>}
        />
      </div>

      <div>
        <Controller
          name="fone"
          control={control}
          defaultValue={teste.fone }
          render={({ field }) => <TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div>
      
        <Controller
          name="religiao"
          control={control}
          defaultValue={teste.religiao }
          render={({ field }) => <TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
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
       
        <Controller
          name="grau_instrucao"
          control={control}
          defaultValue={teste.grau_instrucao }
          render={({ field }) => <TextField id="outlined-basic" label="Outlined" size='small' variant="outlined"{...field} />}
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
