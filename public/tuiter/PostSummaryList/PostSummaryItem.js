const PostSummaryItem = ({ image, time, title, topic, userName }) => {
  return (`
    <div class="wd-post-summary__post">
      <div>
        <p class="wd-post__annotations">
          <span>${topic}</span>
        </p>
        <p class="wd-post__annotations">
          <span class="wd-post__author">${userName}</span>
          <span>&nbsp•&nbsp</span>
          <span>${time}</span>
        </p>
        <p class="wd-post__title">${title}</p>
      </div>
      <img
        src="${image}"
        class="wd-post-summary__image"
      />
    </div>
  `);
}

export default PostSummaryItem;
