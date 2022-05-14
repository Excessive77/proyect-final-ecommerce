import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services'
import '../styles/normalize.css'
import '../styles/stylesLogin.css'

const Login = () => {
    const { register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState ({})

    const onSubmit = (data) => {
        setUserObj(data)
    }

    useEffect (() => {
        if(userObj.email){
            loginUser(userObj)
            .then((res) => {
                localStorage.setItem('token', res.access)
            })
            .then(() => {
                navigate('/shop')
            })
        }
    }, [userObj, navigate])

  return (
    <div className='main-login'>
        <div className="form-container">

        <h1>Inicio de sesión</h1>
        <p>Credenciales para entrar:</p>
        <p>email: admin@admin.com</p>
        <p>password: root</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label>Email</label>
                <input type="email" {...register('email')} placeholder='User' />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password" {...register('password')} placeholder='Password' />
            </div>
            <div className="form-control">
                <input type="submit"/>
            </div>
        </form>

        </div>
    </div>
  )
}

export default Login