import Header from './../components/Header'
import Footer from './../components/Footer'
import styles from './register.module.css'
import signupimg from './../img/signup.svg'
import { useDispatch, useSelector } from 'react-redux'
import { reset, signup } from './../features/auth/auth-slice'
import { useState } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const { loading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await dispatch(signup(formData))
      const response = unwrapResult(result)
      console.log(response)
      await dispatch(reset())
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Header />
      <main id={styles.main}>
        <section id={styles.section_1}>
          <div id={styles.form_container}>
            <div id={styles.img_container}>
              <img src={signupimg} id={styles.img} alt="signup" />
            </div>
            <h1>Register</h1>
            <form id={styles.form} onSubmit={handleSubmit} autoComplete='off'>
              <input type="text" placeholder="Firstname" name='firstName' onChange={handleChange} />
              <input type="text" placeholder="Lastname" name='lastName' onChange={handleChange} />
              <input type="text" placeholder="email" name='email' onChange={handleChange} />
              <input type="password" placeholder="password" name='password' onChange={handleChange} />
              <input type="password" placeholder="confirm password" name='passwordConfirm' onChange={handleChange} />
              <div id={styles.button_box}>
                <button type="submit" id={styles.button}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Register
