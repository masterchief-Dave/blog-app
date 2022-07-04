const Post = require('./../models/post')

const initialPost = [{
  title: "apple phone",
  summary: "the latest from apple",
  category: "News",
  createdAt: { "$date": { "$numberLong": "1656754389263" } }, postDocument: "<p>The Pixel 6a has not arrived yet, with Google confirming that orders will start shipping on July 28. However, two YouTubers have received early units and are already putting them through their paces.&nbsp;<a href=\"https://www.notebookcheck.</p>",
  timeToRead: '5'
},
{
  title: 'spy x family',
  summary: "anime to look out for",
  category: 'Anime',
  createdAt: "",
  postDocument: "",
  timeToRead: '5'
}]