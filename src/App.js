import React from 'react';
import BlogPost from './Components/BlogPost';
<<<<<<< HEAD
import DeleteBlog from './Components/DeleteBlog';
import GetBlog from './Components/GetBlog';
import UpdateBlog from './Components/UpdateBlog';

=======
import DeleteGeneral from './Components/DeleteGeneral'
import GetDocument from './Components/GetDocument'
import GetBlog from './Components/GetBlog';
import GetKnowledge from './Components/GetKnowledge'
import KnowledgePost from './Components/KnowledgePost'
import PostDocument from './Components/PostDocument';
import UpdateBlog from './Components/UpdateBlog';
import UpdateDocument from './Components/UpdateDocument'
import UpdateKnowledge from './Components/UpdateKnowledge'
>>>>>>> 2d859dd (Clay, React and REST)
function App() {

  return (

    <>
      <BlogPost />
      <GetBlog />
      <UpdateBlog />
<<<<<<< HEAD
      <DeleteBlog />
=======
      <PostDocument />
      <GetDocument />
      <UpdateDocument />
      <KnowledgePost />
      <GetKnowledge />
      <UpdateKnowledge />
      <DeleteGeneral />
>>>>>>> 2d859dd (Clay, React and REST)
    </>

  );

}

export default App;