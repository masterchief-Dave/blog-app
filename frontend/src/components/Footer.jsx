import styles from './footer.module.css'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div id={styles.footer}>
      <footer>
        <div className={styles.footer_1}>
          <div id={styles.footer_element}>
            <h2 id={styles.header_text}>Blog App</h2>
            <div id={styles.footer_follow}>
              <h3 id={styles.follow_us}>Follow us</h3>
              <div id={styles.footer_social}>
                <a href="#" className={styles.social}>
                  <FaFacebookSquare
                    size={30}
                    fill="#fafaff"
                    className={styles.social_links}
                  />
                </a>
                <a href="#" className={styles.social}>
                  <FaTwitterSquare
                    size={30}
                    fill="#fafaff"
                    className={styles.social_links}
                  />
                </a>
                <a href="#" className={styles.social}>
                  <FaLinkedin
                    size={30}
                    fill="#fafaff"
                    className={styles.social_links}
                  />
                </a>
              </div>
            </div>
          </div>
          <h3 id={styles.subscribe}>
            {' '}
            Subscribe to out newsletter and get top stories.
          </h3>

          <form action="" id={styles.form}>
            <input
              type="text"
              placeholder="enter email"
              id={styles.form_text}
            />
            <button type="submit" id={styles.form_button}>
              {' '}
              SUBMIT{' '}
            </button>
          </form>
        </div>

        <div id={styles.footer_links}>
          <div className={styles.footer_2}>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="">Programming</a>
              </li>
              <li>
                <a href="#">Life</a>
              </li>
              <li>
                <a href="#">Politics</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_3}>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#"> Editorial Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div id={styles.copyright}>
        <h4> Designed and built by David Bodunrin </h4>
        <h5>&copy; David Bodunrin 2022</h5>
      </div>
    </div>
  )
}

export default Footer
