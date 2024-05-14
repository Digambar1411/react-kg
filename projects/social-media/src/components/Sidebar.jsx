import { usePost } from "../store/post-context";

export const Sidebar = () => {

  const { currentTab, setCurrentTab } = usePost();

  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ "width": '280px' }}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span class="fs-4">Social Media</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto sidebar">
        <li class="nav-item" onClick={() => setCurrentTab('Home')}>
          <a href="#" class={`nav-link ${currentTab === 'Home' && 'active'}`} aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </a>
        </li>
        <li onClick={() => setCurrentTab('Posts')}>
          <a href="#" class={`nav-link ${currentTab === 'Posts' && 'active'}`}>
            <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Posts
          </a>
        </li>

      </ul>
    </div>
  )
}