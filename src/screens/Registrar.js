import React, { useState } from 'react';
import FormComponent from '../components/Formulario';

export default function Registrar ()
{
    return(
        <FormComponent/>
    )
}
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const Registrar = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     senha: '',
//     nome: '',
//     nome_usual: '',
//     data_nasc: '',
//     fone: '',
//     religiao: '',
//     batizado: false,
//     primeira_comunhao: false,
//     crismado: false,
//     grau_instrucao: '',
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can handle the form submission and perform any necessary actions, e.g., send data to the server.
//     console.log('Form data:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         fullWidth
//       />
//       <TextField
//         label="Senha"
//         name="senha"
//         value={formData.senha}
//         onChange={handleChange}
//         type="password"
//         fullWidth
//       />
//       <TextField
//         label="Nome"
//         name="nome"
//         value={formData.nome}
//         onChange={handleChange}
//         required
//         fullWidth
//       />
//       <TextField
//         label="Nome Usual"
//         name="nome_usual"
//         value={formData.nome_usual}
//         onChange={handleChange}
//         fullWidth
//       />
//       <TextField
//         label="Data de Nascimento"
//         name="data_nasc"
//         value={formData.data_nasc}
//         onChange={handleChange}
//         type="date"
//         required
//         fullWidth
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <TextField
//         label="Telefone"
//         name="fone"
//         value={formData.fone}
//         onChange={handleChange}
//         fullWidth
//       />
//       <TextField
//         label="Religião"
//         name="religiao"
//         value={formData.religiao}
//         onChange={handleChange}
//         fullWidth
//       />
//       <div>
//         <label>
//           Batizado:
//           <input
//             type="checkbox"
//             name="batizado"
//             checked={formData.batizado}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Primeira Comunhão:
//           <input
//             type="checkbox"
//             name="primeira_comunhao"
//             checked={formData.primeira_comunhao}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Crismado:
//           <input
//             type="checkbox"
//             name="crismado"
//             checked={formData.crismado}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <TextField
//         label="Grau de Instrução"
//         name="grau_instrucao"
//         value={formData.grau_instrucao}
//         onChange={handleChange}
//         fullWidth
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default Registrar;
