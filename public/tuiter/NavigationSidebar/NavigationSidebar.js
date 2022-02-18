const NavigationSidebar = () => {
  return (`
    <div class="list-group">
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-home"></i>
        <span class="d-none d-xl-inline-block">Home</span>
      </a>
      <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active">
        <i class="fa fa-hashtag"></i>
        <span class="d-none d-xl-inline-block">Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-bell"></i>
        <span class="d-none d-xl-inline-block">Notifications</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-inline-block">Messages</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-inline-block">Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-inline-block">Lists</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-inline-block">Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline-block">More</span>
      </a>
      <button type="button" class="btn btn-primary btn-block rounded-pill mt-2">Tuit</button>
    </div>
  `);
}

export default NavigationSidebar;
