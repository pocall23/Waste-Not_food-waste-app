import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/images/stockphotochef.jpg" alt="" />
                <span className="postUsername">username</span>
                <span className="postDate">5 mins ago</span>
               </div>
               <div className="postTopRight">
                <MoreVertIcon/>
                <div className="postPrice">free</div>
               </div>

            </div>
            <div className="postCenter">
                <span className="postText">posted here</span>
                <img className='postedImg' src="/assets/images/stockfood.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteIcon/>
                    <ReplyIcon/>

                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">... comments</span>
                </div>
            </div>
            

        </div>
    </div>
  )
}
