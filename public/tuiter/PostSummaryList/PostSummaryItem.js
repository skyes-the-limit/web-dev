const PostSummaryItem = ({image, time, title, topic, userName}) => {
  return (`
    <div class="wd-explore-feed__post">
      <div>
        <p class="wd-explore-feed__annotations">
          <span>${topic}</span>
        </p>
        <p class="wd-explore-feed__annotations">
          <span class="wd-explore-feed__author">${userName}</span>
          <span>&nbsp•&nbsp</span>
          <span>${time}</span>
        </p>
        <p class="wd-explore-feed__title">${title}</p>
      </div>
      <img
        src="${image}"
      />
    </div>
  `);
}

export default PostSummaryItem;
