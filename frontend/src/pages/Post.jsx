import Header from './../components/Header'
import Footer from './../components/Footer'
import Bible from './../img/bible.jpg'
import { BsBook } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
import { GoArrowSmallRight } from 'react-icons/go'
import { HiOutlinePlusSm } from 'react-icons/hi'
import styles from './post.module.css'
// import 

function Post() {
  return (
    <div>
      <Header />
      <main id={styles.post_container}>
        <section>
          <div>
            <div id={styles.blog_header_container}>
              <div id={styles.hero_img}>
                <img src={Bible} alt="image of the bible" />
              </div>

              <div id={styles.header_text}>
                <div id={styles.header_tags}>
                  <ul id={styles.header_tags_list}>
                    <li>#FULLSTACK DEVELOPMENT</li>
                    <li>#REACT</li>
                  </ul>
                </div>
                <h1>Blog application created with React and Express</h1>

                <div id={styles.header_summary}>
                  <h3>
                    learn from this blog industry best practice to build a blog
                  </h3>
                </div>

                <div className={styles.header_author}>
                  <div className={styles.header_img_round}>
                    <img src={Bible} alt="the Bible" />
                  </div>
                  <div className={styles.author_role}>
                    <h3> David Bodunrin </h3>
                    <h4> Fullstack developer</h4>
                  </div>
                </div>

                <div id={styles.header_post_info}>
                  <h3>
                    LAST UPDATED ON: Jan, 29 2022{' '}
                    <span>
                      <BsBook size={15} /> <span>5 min read</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div id={styles.line_1}></div>

            <div id={styles.blog_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias repellendus, aliquam aut explicabo vero eos voluptatibus
              voluptates porro, qui cum ipsum adipisci aperiam illo esse
              asperiores dignissimos cumque. Mollitia, voluptate. Enim minus
              sequi accusamus obcaecati asperiores unde doloribus dolor
              corporis, neque magnam ducimus ab eligendi dolorum, nesciunt fuga
              dignissimos quis cum? Consectetur, quis. Soluta id ad deserunt
              ipsam magnam est. Dolore ab inventore at ut. Voluptatum
              accusantium id odit ut earum. Voluptates expedita nulla laudantium
              dicta similique cupiditate dignissimos obcaecati quae deleniti
              fuga. Dolorum tempora modi repellendus perferendis, fugit
              molestias? Eum, natus odio, recusandae veritatis similique atque
              ex accusamus ab dolorum id consectetur pariatur ducimus tenetur
              quo quod voluptates excepturi dicta iusto? Harum placeat quod
              eligendi aliquid dolorum iste ducimus! Ipsa alias consequatur
              corrupti aut aperiam deserunt tenetur nulla est ut porro.
              Recusandae a, molestiae perspiciatis, similique minima dolore
              aliquam impedit dolor in magnam quia maxime ipsa quos libero nam.
              Ipsa dolorem molestias ex, placeat libero odio dicta laudantium
              consequuntur vel cumque ea! Culpa minus mollitia, dolores et quae
              necessitatibus laborum, enim reiciendis voluptates rem non
              laudantium at, nesciunt earum. Voluptates doloribus similique
              suscipit minima sequi vel nemo eos enim voluptatem illum
              accusantium pariatur sint, quis culpa accusamus cupiditate tenetur
              quaerat sit iste nobis magnam quidem, est at! Voluptatibus, eos.
              Sed, magnam incidunt consequatur iste quis consectetur animi
              aperiam, minima, maiores iusto nulla aut ipsum mollitia eos libero
              inventore rerum quos. Magni quaerat magnam esse fugit harum,
              commodi laudantium molestiae! Repellendus, optio minima commodi
              consequuntur architecto dolorum expedita dolore perferendis
              blanditiis cupiditate quae unde nulla! Velit fugiat recusandae,
              repellat adipisci, est natus earum modi error autem, sint minus
              doloribus vel? Ut delectus impedit dicta, nostrum aliquam,
              repellendus placeat officiis assumenda consequatur quis eius ullam
              alias ex cum porro quas hic accusantium quasi voluptatibus ratione
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
              veritatis debitis enim laborum odit. Ex architecto atque officiis.
              Quod quae consectetur dolores cupiditate nisi minus, distinctio
              molestias delectus fugiat exercitationem facere earum mollitia
              illo consequuntur praesentium eveniet animi iure similique atque,
              inventore hic repellat quidem tempore quo! Hic. Atque qui
              dignissimos non obcaecati repellat molestias. Maiores nisi
              provident delectus officiis consequuntur architecto repellat illum
              doloremque rem nihil vel at vitae voluptatem omnis dicta
              consequatur pariatur, necessitatibus similique consectetur.
              Nostrum saepe fugiat qui quasi sequi, pariatur voluptatem
              expedita. Reiciendis asperiores optio, dignissimos temporibus
              accusantium, suscipit fugiat quis repudiandae non nihil eos esse
              est laudantium quidem, tempora reprehenderit soluta. Minus!
              Sapiente sunt dolore saepe deserunt sint illum quidem optio,
              dolorum sit at. Deleniti nam, ratione deserunt perferendis est
              debitis recusandae adipisci fuga officia repellat fugit. Quaerat
              reprehenderit suscipit dolorum maxime? Molestiae et ut aperiam
              repudiandae vel? Atque natus nam minima,
            </div>

            <div id={styles.author_profile}>
              <div className={styles.header_author}>
                <div className={styles.header_img_round}>
                  <img src={Bible} alt="the Bible" />
                </div>
                <div className={styles.author_role}>
                  <h3> David Bodunrin </h3>
                  <h4> Fullstack developer</h4>
                </div>
              </div>
              <div id={styles.author_desc}>
                <p>
                  {' '}
                  Hello, I am David and I love to code, I thank God. Thanks. A
                  technologist with a staunch focus on security and privacy. I
                  love helping developers find the joy of experimentation, and
                  designing unconventional solutions for the purposes of
                  learning something new.
                </p>

                <a href="#">
                  {' '}
                  view profile <GoArrowSmallRight
                    fill="#1f2937"
                    size={35}
                  />{' '}
                </a>
              </div>
            </div>

            <div id={styles.closing_section}>
              <h3 id={styles.more}>more like this</h3>
              <div id={styles.similar_posts}>
                <div className={styles.similar_post}>
                  <div className={styles.similar_post_img}>
                    <img src={Bible} alt="auth0" />
                  </div>
                  <h4> Migrating Auth0 to Auth0 Actions</h4>
                </div>

                <div className={styles.similar_post}>
                  <div className={styles.similar_post_img}>
                    <img src={Bible} alt="auth0" />
                  </div>
                  <h4> Migrating Auth0 to Auth0 Actions</h4>
                </div>

                <div className={styles.similar_post}>
                  <div className={styles.similar_post_img}>
                    <img src={Bible} alt="auth0" />
                  </div>
                  <h4> Migrating Auth0 to Auth0 Actions</h4>
                </div>

              </div>

              <div id={styles.newsletter}>
                <h3>
                  Subscribe to my newsletter and never miss my upcoming articles
                </h3>
                <form action="" id={styles.newsletter_form}>
                  <FaPaperPlane size={30} fill="#1f2937" />
                  <input
                    type="text"
                    placeholder="email address"
                    id={styles.newsletter_email}
                  />
                  <button type="submit" id={styles.newsletter_btn}>
                    {' '}
                    SUBSCRIBE
                  </button>
                </form>
              </div>

              <div id={styles.comments}>
                <div id={styles.comments_container}>
                  <div id={styles.comments_header}>
                    <h3> Comments </h3>
                  </div>
                  <button id={styles.comments_btn}>
                    write a comment <HiOutlinePlusSm size={22} />{' '}
                  </button>
                </div>
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
