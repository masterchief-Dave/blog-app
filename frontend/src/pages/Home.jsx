import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './home.module.css'
import { FaRss } from 'react-icons/fa'
import { MdPostAdd } from 'react-icons/md'
import Bible from './../img/bible.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { reset, getPosts } from './../features/post/post-slice'
import { useEffect } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

function Home() {
  const { message, posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await dispatch(getPosts())
        const data = unwrapResult(response)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    fn()
  }, [getPosts])

  // console.log(posts.data.posts)

  const dataElements = posts?.data?.posts.map((el) => {
    return (
      <article id={styles.main_article} key={el._id}>
        <div id={styles.content_img}>
          <Link to={`/posts/${el._id}`}>
            <img src={Bible} alt="an image should be here " />
          </Link>
        </div>

        <div id={styles.content_text}>
          <h2 id={styles.content_header}>
            <Link to={`/posts/${el._id}`} className={styles.article_link}>
              {el.title}
            </Link>
          </h2>
          <h5 id={styles.content_intro}>
            by {el.user.firstName} {el.user.lastName}
          </h5>
          <h5 id={styles.content_date}>
            {new Date(el.createdAt).toDateString()}
          </h5>
        </div>
      </article>
    )
  })

  return (
    <div id={styles.home_section}>
      <Header />
      <main id={styles.main}>
        <div id={styles.header_content}>
          <h1 id={styles.header}> Blog </h1>
          <div id={styles.commit}>
            <a href="" id={styles.subscribe} className={styles.subscribe}>
              <p href="" className={styles.subscribe_link}>
                Subscribe to mailing list
              </p>
              <MdPostAdd size={20} />
            </a>
            <a href="" className={styles.subscribe}>
              <p href="" className={styles.subscribe_link}>
                Add to your Rss Feed
              </p>
              <FaRss size={15} />
            </a>
          </div>
        </div>

        <div id={styles.content}>
          <div id={styles.articles}>
            {dataElements}
            {/* <article id={styles.main_article}>
              <div id={styles.content_img}>
                <a href="">
                  <img src={Bible} alt="an image should be here " />
                </a>
              </div>

              <div id={styles.content_text}>
                <h2 id={styles.content_header}>
                  <a href="#" className={styles.article_link}>
                    Featured Book: Inclusion on Purpose
                  </a>
                </h2>
                <h5 id={styles.content_intro}>by Bodunrin David</h5>
                <h5 id={styles.content_date}>Monday 5th september 2005</h5>
              </div>
            </article> */}

            {/* <article id={styles.main_article}>
              <div id={styles.content_img}>
                <a href="">
                  <img src={Bible} alt="an image should be here " />
                </a>
              </div>

              <div id={styles.content_text}>
                <h2 id={styles.content_header}>
                  <a href="#" className={styles.article_link}>
                    Featured Book: Inclusion on Purpose
                  </a>
                </h2>
                <h5 id={styles.content_intro}>by Bodunrin David</h5>
                <h5 id={styles.content_date}>Monday 5th september 2005</h5>
              </div>
            </article> */}
          </div>

          <div id={styles.categories}>
            <h3>categories</h3>
            <div>
              <ul className={styles.categories_list}>
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Life</a>
                </li>
                <li>
                  <a href="#">Politics</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">Anime</a>
                </li>
                <li>
                  <a href="#">Programming</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Humor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
