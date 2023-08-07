import React from "react";
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';
import './dependentes.css'

class Dependentes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ name: "", email : "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { name: "", email: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <form  onSubmit={this.handleSubmit} style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.formValues.map((element, index) => (
            <div className="chidld" key={index} style={{display: "box", width: "100%"}}>
   
              <TextField id="outlined-basic" label="Nome" size='small' variant="outlined" onChange={e => this.handleChange(index, e)} />
              <TextField id="outlined-basic" label="Data de nascimento" size='small' variant="outlined" onChange={e => this.handleChange(index, e)} />
              <div>
              <TextField id="outlined-basic" label="Pai" size='small' variant="outlined" onChange={e => this.handleChange(index, e)} />
              
              </div>
              <TextField id="outlined-basic" label="Mãe" size='small' variant="outlined" onChange={e => this.handleChange(index, e)} />
              {
                index ? 
                  <Button size='small' variant="contained" type="button" className="button remove" onClick={() => this.removeFormFields(index)}>Remover</Button> 
                : null
              }
            </div>
            
          ))}
          
          <div className="button-section" style={{display: "flex", width: "100%", justifyContent: "flex-end", marginRight: "50px"}}>
          <Button size='small' variant="contained" endIcon={<AddIcon />} className="button add" type="button" onClick={() => this.addFormFields()}>Adicionar Dependente</Button>
          {/* <Button size='small' variant="contained" endIcon={<AddIcon />} style={{marginLeft: "15px"}} >CARREGAR</Button> */}
            <Button size='small'variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}} >SALVAR</Button>
          </div>
      </form>
    );
  }
}
export default Dependentes;