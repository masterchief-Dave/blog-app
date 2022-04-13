import Header from "./../components/Header";
import Footer from "../components/Footer";
import styles from "./register.module.css";
import loginimg from "./../img/login.svg";
import { reset, login } from './../features/auth/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'


function Login() {
  const dispatch = useDispatch()
  const { message, isError, loading, isSuccess } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  // login form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await dispatch(login(formData))
      const response = unwrapResult(result)
      console.log(response)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div>
      <Header />
      <main id={styles.main}>
        <section id={styles.section_1}>
          <div id={styles.form_container}>
            <div id={styles.img_container}>
              <img src={loginimg} alt="login" id={styles.img} />
            </div>

            <h1>Login</h1>
            <form
              action=""
              id={styles.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                type="text"
                placeholder="email"
                className={styles.input_text}
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                className={styles.input_text}
                name="password"
                onChange={handleChange}
              />

              <div id={styles.button_box}>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login;
