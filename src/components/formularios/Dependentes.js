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
    alert(JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => this.handleChange(index, e)} />
              <label>Email</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => this.handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
          <Button size='small' variant="contained" endIcon={<AddIcon />} className="button add" type="button" onClick={() => this.addFormFields()}>Adicionar Dependente</Button>
          <Button size='small' variant="contained" endIcon={<AddIcon />} style={{marginLeft: "15px"}} >CARREGAR</Button>
            <Button size='small'variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}} >SALVAR</Button>
          </div>
      </form>
    );
  }
}
export default Dependentes;