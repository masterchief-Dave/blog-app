import React, { useState } from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from './profile.module.css'

function profile() {
  return (
    <div>
      <Header />
      <main>
        <section> <h1> Share your thought 😀🤔💭</h1> </section>
        <div id={styles.editor_container}>

          <form action="" id={styles.form}>
            <div id={styles.form_body_container}>
              <h4 id={styles.picture_label}> Choose the blog header image </h4>
              <div id={styles.form_file_container}>
                <div id={styles.file_container}>
                  <label class={styles.file}>
                    <input type="file" id={styles.file} aria-label="File browser example" className={styles.input} />
                  </label>
                </div>
              </div>

              <div id={styles.form_header_container} className={styles.form_body}>
                <label htmlFor="">Enter the topic of this post </label>
                <input type="text" placeholder='topic' className={styles.input} />
              </div>

              <div id={styles.form_summary_container} className={styles.form_body}>
                <label htmlFor="form_summary">Enter the summary of this post </label>
                <textarea type="text" placeholder='summary' className={styles.input} id={styles.form_summary} />
              </div>

              <div id={styles.form_cat_container} className={styles.form_body}>
                <label htmlFor="">select the category for this post</label>
                <select name="" id="" className={styles.input}>
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
                </select>
              </div>
            </div>

            <div></div>

            <Editor
              toolbarClassName={styles.toolbar_class}
              wrapperClassName={styles.editor_wrapper}
              editorClassName={styles.editor_class}

            />

            <div className={styles.final_btn}>
              <button id={styles.save_btn}> save </button>
              <button id={styles.draft_btn}> save as draft </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default profile