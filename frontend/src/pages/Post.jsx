import Header from './../components/Header'
import Footer from './../components/Footer'
import Bible from './../img/bible.jpg'
import { BsBook } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
import { GoArrowSmallRight } from 'react-icons/go'
import { HiOutlinePlusSm } from 'react-icons/hi'
import styles from './post.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { reset, getPost } from './../features/post/post-slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { Quill } from 'react-quill'

function Post() {
  const dispatch = useDispatch()
  const { post, message, loading } = useSelector((state) => state.post)
  const { id } = useParams()

  console.log(id)
  useEffect(() => {
    const fn = async () => {
      try {
        const response = await dispatch(getPost(id))
        const data = unwrapResult(response)
      } catch (err) {
        console.log(err)
      }
    }

    fn()
  }, [getPost])

  console.log(post)
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
                    {/* <li>#FULLSTACK DEVELOPMENT</li>
                    <li>#REACT</li> */}
                    {post.data.post.category}
                  </ul>
                </div>
                <h1>{post.data.post.title}</h1>

                <div id={styles.header_summary}>
                  <h3>{post.data.post.summary}</h3>
                </div>

                <div className={styles.header_author}>
                  <div className={styles.header_img_round}>
                    <img src={Bible} alt="the Bible" />
                  </div>
                  <div className={styles.author_role}>
                    <h3>
                      {' '}
                      {post.data.post.user.firstName}{' '}
                      {post.data.post.user.lastName}{' '}
                    </h3>
                    <h4> Fullstack developer</h4>
                  </div>
                </div>

                <div id={styles.header_post_info}>
                  <h3>
                    LAST UPDATED ON:{' '}
                    {new Date(post.data.post.createdAt).toDateString()}
                    <span>
                      <BsBook size={15} />{' '}
                      <span>{post.data.post.timeToRead} min read</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div id={styles.line_1}></div>

            <div id={styles.blog_text}>
              <div dangerouslySetInnerHTML={{__html: post.data.post.postDocument}}/>
              </div>

            <div id={styles.author_profile}>
              <div className={styles.header_author}>
                <div className={styles.header_img_round}>
                  <img src={Bible} alt="the Bible" />
                </div>
                <div className={styles.author_role}>
                  <h3>
                    {' '}
                    {post.data.post.user.firstName}{' '}
                    {post.data.post.user.lastName}{' '}
                  </h3>
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
