import React from 'react'

const PostItem = ({ author, description, imageSrc, link, timeStamp, interactionsCount }) => {
  return (
    <div className="wd-post-item d-flex">
      <img
        src={author.profileImgSrc}
        className="wd-post__profileImage"
        alt={`${author}'s profile`}
      />
      <div>
        <div>
          <p className="wd-post__annotations">
            <span className="wd-post__author">{author.name}</span>
            <span>{author.handle}</span>
            {timeStamp &&
              <span>&nbsp;•&nbsp;{timeStamp}</span>
            }
          </p>
          <p>{description}</p>
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
            <i className="fa-regular fa-comment"></i>
            {interactionsCount.comments}
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            {interactionsCount.retweets}
          </div>
          <div>
            <i className="far fa-heart"></i>
            {interactionsCount.likes}
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
