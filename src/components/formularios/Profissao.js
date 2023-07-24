import React, { useState, useEffect } from 'react';
import { useForm, Controller, set, SetFieldValue } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfissaoForm = () => {


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

  const { handleSubmit, control, reset, setValue, errors } = useForm();

  const getInfos = async () => {
    try {
      const response = await axios.put("http://10.254.4.132:3005/api/getinfo", { usuario: user.usuario, cubo: "profissao" });
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
    // console.log(data, Props.par);
    // console.log(teste);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Profissao:</label>
        <Controller
          name="profissao"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {/* {errors.profissao && <span></span>} */}
      </div>

      <div>
        <label>Local de Trabalho:</label>
        <Controller
          name="local_trabalho"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {/* {errors.local_trabalho && <span></span>} */}
      </div>

      <div>
        <label>Cargo:</label>
        <Controller
          name="cargo"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {/* {errors.local_trabalho && <span></span>} */}
      </div>

      <div>
        <label>Endereço:</label>
        <Controller
          name="endereco"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {/* {errors.local_trabalho && <span></span>} */}
      </div>

      <div>
        <label>Fone:</label>
        <Controller
          name="fone"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {/* {errors.local_trabalho && <span></span>} */}
      </div>

      <div>
        <label>Condução Propria?</label>
        <Controller
          name="batizado"
          control={control}
          defaultValue={false}
          render={({ field }) => teste.conducao_propria !== false ? <Switch size='small' checked type="checkbox" {...field} /> : <Switch size='small'  type="checkbox" {...field}></Switch>}
        />
      </div>

      {/* ... Add other input fields as needed */}

      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <Button size='small' variant="contained" endIcon={<AddIcon />} >CARREGAR</Button>
      <Button size='small' variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}} >SALVAR</Button>
      
      </div>
    </form>
  );
};

export default ProfissaoForm;
