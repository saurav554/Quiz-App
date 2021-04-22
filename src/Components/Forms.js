import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Email: "",
            phone:"",
            Password: "",
            redirect:false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            Email: event.target.value
        })
    }

    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

   

    handleSubmit = (event) => {

        alert(`${this.state.Name} ${this.state.Email}  Registered Successfully !!!!`)
        console.log(this.state);
        console.log('props data',this.props)
        this.setState({
            Name: "",
            Email: "",
            phone: "",
            password: "",
            redirect:true
           
        })
        this.props.history.push('/AppBar')
     event.preventDefault()
        
    }
     
    render() {
        const {redirect}=this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Qriocty-Box</h1>
                    <label>Name :</label> <input type="text" value={this.state.Name} onChange={this.namehandler} placeholder="Name..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.Email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Mobile-no :</label> <input type="number" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone - no..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <br />
                                   
                    <input type="submit" value="Sign-Up" />
                </form>

            </div>
            
        )
    }
}

export default Form
