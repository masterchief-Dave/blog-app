import Header from './../components/Header'
import Footer from './../components/Footer'
import styles from './register.module.css'
import signup from './../img/signup.svg'

function Register() {
  return (
    <div>
      <Header />
      <main id={styles.main}>
        <section id={styles.section_1}>
          <div id={styles.form_container}>
            <div id={styles.img_container}>
              <img src={signup} id={styles.img} alt="signup" />
            </div>
            <h1>Register</h1>
            <form action="" id={styles.form}>
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
              <input type="text" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
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
