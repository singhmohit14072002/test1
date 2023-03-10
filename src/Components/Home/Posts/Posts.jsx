import React from 'react'
import "./Posts.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/QuestionAnswer';
import RepostIcon from '@mui/icons-material/Cached';

export default function Posts() {
  return (
    <div >
      <div className='posts'>
        
          <div className='postbox'>
            <div className='profileBox'>
            <div className='profileImg'><img  src='#' alt='Profileimg' /></div>
            <span>Name</span>
            </div>
            <span className='description'>Description</span>
          </div>
        
        <div className='postImg'><img src='#' alt='Post'></img></div>
          <span className='postText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dictum ex, vel placerat justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sagittis nisl tellus, eget rhoncus urna aliquam at. Praesent vestibulum consequat turpis sed vulputate.</span>
        <div className='commentBox'><span className='likes'>Likes<ThumbUpIcon /><div className='likeNumber'>3</div></span><div className='rightBox'><span className='comments'>Comments <CommentIcon /><div className='commentsNumber'>2</div></span><span className='repost'>Repost <RepostIcon /></span></div></div>
      </div>
    </div>
  )
}
