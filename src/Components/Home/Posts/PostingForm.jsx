import React from 'react';
import "./PostingForm.css";
import Posts from './Posts';
import SendIcon from '@mui/icons-material/Send';
import PhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';



export default function Post() {
  return (
    <div className='postScroll'>
    <div className='postingDiv'>
      <div className='Post'>
        <div className='imgDiv'><img src='#' alt='profileImage'></img></div>
        <form className='postForm'>
          <input placeholder='Post an article or image about your experiences!!'></input>
          <button type='submit'><SendIcon /></button>
        </form>
      </div>
      <hr className='shareSeparator' />
      <div className='postingOptions'>
        <div className='options'><PhotoIcon /> Photo</div>
        <div className='options'><VideoIcon /> Video</div>
        <div className='options'><ArticleIcon /> Document </div>
      </div>
    </div>
    <hr className='separator' />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    </div>
  )
}
