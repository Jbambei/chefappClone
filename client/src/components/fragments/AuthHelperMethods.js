import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default function AuthHelperMethods(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super()
            this.state = {
                loading: true,
                redirect: false
            };
        }

        componentDidMount() {
            if (sessionStorage.getItem("token")){
                    this.newprops = { ...this.props }
                    this.setState({ loading: false })
            } else {
                    this.setState({ loading: false, redirect: true })
            }
            // fetch('/checkToken')
            //     .then(res => res.json())
            //     .then(res => {
            //         this.newprops = { ...this.props }
            //         this.setState({ loading: false })
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         this.setState ({ loading: false })
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         this.setState({ loading: false, redirect: true })
            //     })
        }
        
        render() {
            const { loading, redirect } = this.state
            if (loading) { return null }
            if (redirect) { return <Redirect to ="/Login" /> }
            return (
                <React.Fragment>
                    <ComponentToProtect { ...this.newprops } />
                </React.Fragment>
            )
        }
    }
}
// export default AuthHelperMethods
// export default class AuthHelperMethods {
    
//     login = (username, password) => {
//         return axios.post(`/login`,{
//             username,
//             password
//           }).then(res => {
            
//             this.setToken(res.token) // Setting the token in localStorage
//             return Promise.resolve(res);
//         })
//     }

//     loggedIn = () => {
//         const token = this.getToken()

//         return !!token
//     }

//     setToken = (idToken) => {
//         localStorage.setItem('id_token', idToken)
//     }
// }
