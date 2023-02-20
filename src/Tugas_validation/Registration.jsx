import React from "react";
import Input from "./FormatInput";
import styled from "styled-components";
import Validator from "validatorjs";


const Div = styled.div`
    width: 300px;
    
    margin: 100px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    background-color:#009BFF;
    
`;
const Button = styled.button`
background: #fff;
color: #3498db;
border:0;
border-radius: 5px;
padding: 5px 8px;
cursor: pointer;
&:active {
    transform: translateY(4px);
}

`
const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
class Registration extends React.Component {
    state={
        nama:'',
        email:'',
        password:'',
        confirmPassword:'',
        errors: []
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
        const {nama, email, password, confirmPassword} = this.state;
        
        let data = {nama,  email, password, confirmPassword };
          
          let rules = {
            nama: 'string|required',
            email: 'required|email',
            password: 'min:8|required',
            confirmPassword: 'min:8|required|same:password'
          };
          
          let validation = new Validator(data, rules);
          validation.passes();
          this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
                ...validation.errors.get('confirmPassword')
            ]
          })
    }
    render(){
        return (
            <Div>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h2>Form Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="nama" label="Nama" placeholder="Masukan Nama Lengkap" 
                    onChange={value => this.setState({nama: value})}/>
                    <Input type="email" name="email" label="Email" placeholder="Masukan Alamat Email"
                    onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Create Password" placeholder="Buat Password"
                    onChange={value => this.setState({password: value})}/>
                    <Input type="password" name="confirmPassword" label="Confirm Password" placeholder="Ulangi Password"
                    onChange={value => this.setState({confirmPassword: value})}/>
                    <br />
                    <Button type="submit">Register</Button>
                </form>

            </Div>
        )

    }
}

export default Registration;