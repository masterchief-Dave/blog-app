import Header from "./../components/Header";
import Footer from "../components/Footer";
import styles from "./register.module.css";
import login from "./../img/login.svg";
import user from './../img/user2.svg'

function Login() {
  return (
    <div>
      <Header />
      <main id={styles.main}>
        <section id={styles.section_1}>
          <div id={styles.form_container}>
            <div id={styles.img_container}>
              <img src={user} alt="" />
              <img src={login} alt="login" id={styles.img} />
            </div>
            <h1>Login</h1>
            <form action="" id={styles.form}>
              <input
                type="text"
                placeholder="email"
                className={styles.input_text}
              />
              <input
                type="password"
                placeholder="password"
                className={styles.input_text}
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
  );
}

export default Login;
