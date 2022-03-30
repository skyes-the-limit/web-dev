import React from 'react'
import { useDispatch } from 'react-redux';

import TuitStats from '../TuitStats';
import { deleteTuit } from "../actions/tuits-actions";

const DEFAULT_PROFILE = "https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png"

const TuitItem = ({ tuit }) => {
  const { postedBy, content, imageSrc, link, timeStamp } = tuit
  const dispatch = useDispatch();

  return (
    <div className="wd-tuit-item d-flex">
      <img
        src={postedBy.profileImgSrc || DEFAULT_PROFILE}
        className="wd-tuit__profileImage"
        alt={`${postedBy.username}'s profile`}
      />
      <div>
        <div>
          <p className="wd-tuit__annotations">
            <span className="wd-tuit__postedBy">{postedBy.username}</span>
            <span>{postedBy.handle}</span>
            {timeStamp &&
              <span>&nbsp;•&nbsp;{timeStamp}</span>
            }
            <i
              onClick={() => deleteTuit(dispatch, tuit)}
              className="fas fa-times fa-pull-right"
            ></i>

          </p>
          <p>{content}</p>
        </div>
        {link &&
          <div className="wd-tuit__link">
            <img
              src={link.previewImageSrc}
              className="wd-tuit__image wd-tuit__link-image"
              alt=""
            />
            <div className="wd-tuit__link-text">
              <p className="wd-tuit__link-title">{link.previewTitle}</p>
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
            className="wd-tuit__image"
            alt=""
          />
        }
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
}

export default TuitItem;
