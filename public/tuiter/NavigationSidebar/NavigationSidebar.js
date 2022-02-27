import pages from "./pages.js";

const NavItem = (page, activePage) => {
  return (`
    <a href="${page.href}" class="list-group-item list-group-item-action ${activePage === page.title ? 'active' : ''}">
      <i class="${page.iconClasses}"></i>
      <span class="d-none d-xl-inline-block">${page.title}</span>
    </a>
  `)
}

const NavigationSidebar = (activePage) => {
  return (`
    <div>
      <div class="list-group">
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        ${pages.map(page => {
            return (NavItem(page, activePage));
          }).join('')
        }
        <button type="button" class="btn btn-primary btn-block rounded-pill mt-2">Tuit</button>
      </div>
    </div>
  `);
}

export default NavigationSidebar;
