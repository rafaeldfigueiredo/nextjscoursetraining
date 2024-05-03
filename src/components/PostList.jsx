import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function PostList({isPosting,onStopPosting}) {
const [postsList,setPosts] = useState([])

function addPostHandler(postData){
  setPosts((existingPosts)=>{[postData, ...existingPosts]})
}

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      )}
      <ul className={classes.posts}> 
        {postsList.map((post)=>{<Post author={post.author} body={post.body}/>})}
      </ul>
    </>
  );
}

export default PostList;