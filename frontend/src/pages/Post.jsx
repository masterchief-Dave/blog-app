import Header from './../components/Header'
import Footer from './../components/Footer'
import Bible from './../img/bible.jpg'
import { BsBook } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
import {BiRightArrow} from 'react-icons/bi'
import {HiOutlinePlusSm} from 'react-icons/hi'
import styles from './post.module.css'

function Post() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div>
            <div>
              <img src={Bible} alt="image of the bible" />
            </div>

            <div>
              <h1>Blog application</h1>

              <div>
                {/* <img src="" alt="" /> */}
                <h3> David Bodunrin </h3>
              </div>

              <div>
                <h3>
                  Jan, 29 2022 <span>.</span>
                </h3>

                <h3>
                  {' '}
                  <BsBook />5 min read{' '}
                </h3>
              </div>

              <div>
                <h3>
                  Subscribe to my newsletter and never miss my upcoming articles
                </h3>
                <form action="">
                  <input type="text" placeholder="email address" />
                  <button type="submit"> SUBSCRIBE</button>
                </form>
              </div>

              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias repellendus, aliquam aut explicabo vero eos
                voluptatibus voluptates porro, qui cum ipsum adipisci aperiam
                illo esse asperiores dignissimos cumque. Mollitia, voluptate.
                Enim minus sequi accusamus obcaecati asperiores unde doloribus
                dolor corporis, neque magnam ducimus ab eligendi dolorum,
                nesciunt fuga dignissimos quis cum? Consectetur, quis. Soluta id
                ad deserunt ipsam magnam est. Dolore ab inventore at ut.
                Voluptatum accusantium id odit ut earum. Voluptates expedita
                nulla laudantium dicta similique cupiditate dignissimos
                obcaecati quae deleniti fuga. Dolorum tempora modi repellendus
                perferendis, fugit molestias? Eum, natus odio, recusandae
                veritatis similique atque ex accusamus ab dolorum id consectetur
                pariatur ducimus tenetur quo quod voluptates excepturi dicta
                iusto? Harum placeat quod eligendi aliquid dolorum iste ducimus!
                Ipsa alias consequatur corrupti aut aperiam deserunt tenetur
                nulla est ut porro. Recusandae a, molestiae perspiciatis,
                similique minima dolore aliquam impedit dolor in magnam quia
                maxime ipsa quos libero nam. Ipsa dolorem molestias ex, placeat
                libero odio dicta laudantium consequuntur vel cumque ea! Culpa
                minus mollitia, dolores et quae necessitatibus laborum, enim
                reiciendis voluptates rem non laudantium at, nesciunt earum.
                Voluptates doloribus similique suscipit minima sequi vel nemo
                eos enim voluptatem illum accusantium pariatur sint, quis culpa
                accusamus cupiditate tenetur quaerat sit iste nobis magnam
                quidem, est at! Voluptatibus, eos. Sed, magnam incidunt
                consequatur iste quis consectetur animi aperiam, minima, maiores
                iusto nulla aut ipsum mollitia eos libero inventore rerum quos.
                Magni quaerat magnam esse fugit harum, commodi laudantium
                molestiae! Repellendus, optio minima commodi consequuntur
                architecto dolorum expedita dolore perferendis blanditiis
                cupiditate quae unde nulla! Velit fugiat recusandae, repellat
                adipisci, est natus earum modi error autem, sint minus doloribus
                vel? Ut delectus impedit dicta, nostrum aliquam, repellendus
                placeat officiis assumenda consequatur quis eius ullam alias ex
                cum porro quas hic accusantium quasi voluptatibus ratione
                deleniti! Quidem ullam dicta ducimus suscipit! Est fuga porro
                numquam quaerat, quos nulla deleniti iusto aliquam assumenda
                doloribus. Architecto saepe nam eos odio illum doloribus aliquid
                autem ipsum voluptas quae rerum, commodi expedita dolorem quod
                recusandae! Ratione eveniet dignissimos iste aspernatur quos,
                rerum quia enim modi fugiat necessitatibus natus? Neque sint, et
                nisi, provident voluptates qui quibusdam excepturi corporis non
                unde saepe numquam quia porro repudiandae. Deserunt beatae,
                voluptatibus, at sed, eum illum facilis non fugit quidem odio id
                dolore est ipsa ratione voluptatum commodi temporibus hic
                veritatis debitis enim laborum odit. Ex architecto atque
                officiis. Quod quae consectetur dolores cupiditate nisi minus,
                distinctio molestias delectus fugiat exercitationem facere earum
                mollitia illo consequuntur praesentium eveniet animi iure
                similique atque, inventore hic repellat quidem tempore quo! Hic.
                Atque qui dignissimos non obcaecati repellat molestias. Maiores
                nisi provident delectus officiis consequuntur architecto
                repellat illum doloremque rem nihil vel at vitae voluptatem
                omnis dicta consequatur pariatur, necessitatibus similique
                consectetur. Nostrum saepe fugiat qui quasi sequi, pariatur
                voluptatem expedita. Reiciendis asperiores optio, dignissimos
                temporibus accusantium, suscipit fugiat quis repudiandae non
                nihil eos esse est laudantium quidem, tempora reprehenderit
                soluta. Minus! Sapiente sunt dolore saepe deserunt sint illum
                quidem optio, dolorum sit at. Deleniti nam, ratione deserunt
                perferendis est debitis recusandae adipisci fuga officia
                repellat fugit. Quaerat reprehenderit suscipit dolorum maxime?
                Molestiae et ut aperiam repudiandae vel? Atque natus nam minima,
                dolores accusamus labore suscipit consectetur aperiam, sit a
                quasi corporis rerum voluptatum officiis neque ut optio aliquam
                alias repellat eligendi. Libero quibusdam officiis tempore natus
                officia tenetur consequatur necessitatibus. Soluta, dolorum,
                architecto recusandae veniam doloribus sequi eum inventore, est
                repudiandae sunt officia ipsa quod dolorem et dolores! Ad, rerum
                reprehenderit. Optio ad dignissimos et animi voluptates cumque
                odio ullam, quod illo provident eos explicabo repellendus
                blanditiis, dolor dolore sint consequuntur quae! Quo voluptate
                aut beatae neque totam velit atque dicta.
              </div>

              <div id={styles.tags}>
                #data-structures #problem-solving-skills
              </div>

              <div id={styles.author_profile}>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <h2> Bodunrin David</h2>
                  <h3> Fullstack developer</h3>
                </div>

                <div>
                  <p>
                    {' '}
                    Hello, I am David and I love to code, I thank God. Thanks
                  </p>

                  <a href="#"> view profile</a>
                </div>
              </div>

              <div>
                  more like this
              </div>

              <div>
                  comments
                  <button>write a comment </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Post
