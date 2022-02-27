const PostItem = ({ author, description, imageSrc, link, timeStamp, interactionsCount }) => {
  

  return (`
    <div class="wd-post-item d-flex">
      <img 
        src="${author.profileImgSrc}" 
        class="wd-post__profileImage"
      />
      <div>
        <div>
          <p class="wd-post__annotations">
            <span class="wd-post__author">${author.name}</span>
            <span>${author.handle}</span>
            ${timeStamp ? `<span>&nbsp•&nbsp${timeStamp}</span>` : ''}
          </p>
          <p>${description}</p>
        </div>
        ${link ? (`
          <div class="wd-post__link">
            <img 
              src="${link.previewImageSrc}" 
              class="wd-post__image wd-post__link-image"  
            />
            <div class="wd-post__link-text">
              <p class="wd-post__link-title">${link.previewTitle}</p>
              <p class="wd-post__link-description">${link.previewDescription}</p>
              <p class="wd-post__link-url">
                <a href="https://${link.baseUrl}" target="_blank">${link.baseUrl}</a>
              </p>
            </div>
          </div>
        `) : ''}
        ${imageSrc ? (`
          <img 
            src="${imageSrc}" 
            class="wd-post__image"  
          />
        `) : ''}
        <div class="wd-post__interactions d-flex justify-content-between">
          <div>
            <i class="fa-regular fa-comment"></i>
            ${interactionsCount.comments}
          </div>
          <div>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
            ${interactionsCount.retweets}
          </div>
          <div>
            <i class="far fa-heart"></i>
            ${interactionsCount.likes}
          </div>
          <div>
            <i class="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  `);
}

export default PostItem;
