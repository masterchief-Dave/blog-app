import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './profile.module.css'
import './editor.css'
import ReactQuill, {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { reset, createPost } from './../features/post/post-slice'
import { unwrapResult } from '@reduxjs/toolkit'

function Profile() {
  const { post, posts, message, loading } = useSelector((state) => state.post)
  const {user} = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    topic: '',
    summary: '',
    category: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async function (e) {
    e.preventDefault()
    const postData = {
      user: user?.data?.user._id,
      title: formData.topic,
      summary: formData.summary,
      category: formData.category,
      postDocument: editor
    }
    console.log(postData)

    try{
      const response = await dispatch(createPost(postData))
      const data = await unwrapResult(response)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  // console.log(formData)
  const [editor, setEditor] = useState('')
  
  const handleEditorChange = (e) => {
    setEditor(e)
  }

  // console.log(editor)

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6] }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean']
  ]

  const appModules = {
    toolbar: {
      container: toolbarOptions
    }
  }

  const appFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
    'indent',
    'script',
    'direction',
    'clean',
    'align',
    'color',
    'background'
  ]

  return (
    <div>
      <Header />
      <main>
        <section>
          {' '}
          <h1> Share your thought 😀🤔💭</h1>{' '}
        </section>
        <div id={styles.editor_container}>
          <form id={styles.form} onSubmit={handleSubmit}>
            <div id={styles.form_body_container}>
              <h4 id={styles.picture_label}> Choose the blog header image </h4>
              <div id={styles.form_file_container}>
                <div id={styles.file_container}>
                  <label className={styles.file}>
                    <input
                      type="file"
                      id={styles.file}
                      aria-label="File browser example"
                      className={styles.input}
                    />
                  </label>
                </div>
              </div>

              <div
                id={styles.form_header_container}
                className={styles.form_body}
              >
                <label htmlFor="">Enter the topic of this post </label>
                <input
                  type="text"
                  placeholder="topic"
                  className={styles.input}
                  onChange={handleChange}
                  name="topic"
                />
              </div>

              <div
                id={styles.form_summary_container}
                className={styles.form_body}
              >
                <label htmlFor="form_summary">
                  Enter the summary of this post{' '}
                </label>
                <textarea
                  type="text"
                  placeholder="summary"
                  className={styles.input}
                  id={styles.form_summary}
                  onChange={handleChange}
                  name="summary"
                />
              </div>

              <div id={styles.form_cat_container} className={styles.form_body}>
                <label htmlFor="">select the category for this post</label>
                <select
                  id=""
                  className={styles.input}
                  onChange={handleChange}
                  name="category"
                >
                  <option value="" defaultValue="">
                    Category
                  </option>
                  <option> News </option>
                  <option> Programming </option>
                  <option> Life </option>
                  <option> Politics </option>
                  <option> Music </option>
                  <option> Anime </option>
                  <option> Books </option>
                  <option> Gaming </option>
                  <option> Humor </option>
                  <option> Food </option>
                  <option> Art </option>
                  <option> Sport </option>
                </select>
              </div>
            </div>

            <ReactQuill
              theme="snow"
              value={editor}
              onChange={handleEditorChange}
              placeholder="share your thoughts"
              modules={appModules}
              formats={appFormats}
            />

            <div className={styles.final_btn}>
              <button id={styles.save_btn} type='submit'> save </button>
              <button id={styles.draft_btn}> save as draft </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
