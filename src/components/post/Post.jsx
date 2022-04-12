import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = () => {
  return (
      <>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/2.jpg" alt="" />
                    <span className="postUsername">Mithat Kara</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post </span>
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="" />
                    <img className="likeIcon" src="/assets/heart.png" alt="" />
                    <span className="postLikeCounter">36 people like it</span>

                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>

            </div>
        </div>
    </div>
    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/2.jpg" alt="" />
                <span className="postUsername">Mithat Kara</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! It's my first post </span>
            <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">36 people like it</span>

            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>

        </div>
    </div>
</div>
<div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/2.jpg" alt="" />
                <span className="postUsername">Mithat Kara</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! It's my first post </span>
            <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">36 people like it</span>

            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>

        </div>
    </div>
</div>
<div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/2.jpg" alt="" />
                <span className="postUsername">Mithat Kara</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! It's my first post </span>
            <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">36 people like it</span>

            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>

        </div>
    </div>
</div>
    
    </>
  )
}

export default Post