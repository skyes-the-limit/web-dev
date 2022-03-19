import React from 'react'
import { useDispatch } from "react-redux";

const DEFAULT_PROFILE = "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"

const PostItem = ({ post }) => {
  const { postedBy, tuit, imageSrc, link, timeStamp, stats } = post
  console.log(post)
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: 'delete-tuit', tuit })
  };


  return (
    <div className="wd-post-item d-flex">
      <img
        src={postedBy.profileImgSrc || DEFAULT_PROFILE}
        className="wd-post__profileImage"
        alt={`${postedBy.username}'s profile`}
      />
      <div>
        <div>
          <p className="wd-post__annotations">
            <span className="wd-post__postedBy">{postedBy.username}</span>
            <span>{postedBy.handle}</span>
            {timeStamp &&
              <span>&nbsp;•&nbsp;{timeStamp}</span>
            }
            <i
              onClick={() => deleteTuit(post)}
              className="fas fa-times fa-pull-right"
            ></i>

          </p>
          <p>{tuit}</p>
        </div>
        {link &&
          <div className="wd-post__link">
            <img
              src={link.previewImageSrc}
              className="wd-post__image wd-post__link-image"
              alt=""
            />
            <div className="wd-post__link-text">
              <p className="wd-post__link-title">{link.previewTitle}</p>
              <p>{link.previewDescription}</p>
              <p>
                <a href={`https://${link.baseUrl}`} target="_blank" rel="noreferrer">{link.baseUrl}</a>
              </p>
            </div>
          </div>
        }
        {imageSrc &&
          <img
            src={imageSrc}
            className="wd-post__image"
            alt=""
          />
        }
        <div className="wd-post__interactions d-flex justify-content-between">
          <div>
            <i className="far fa-comment"></i>
            {stats.replies}
          </div>
          <div>
            <i className="fas fa-redo"></i>
            {stats.retuits}
          </div>
          <div>
            <i className="far fa-heart"></i>
            {stats.likes}
          </div>
          <div>
            <i className="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
