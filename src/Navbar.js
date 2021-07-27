import { Link } from "react-router-dom";
import M from 'materialize-css';

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper ">
        <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Blogs Book</a>
        <ul class="right hide-on-med-and-down">
          <li><Link to="/"><i class="material-icons">home</i></Link></li>
          <li><Link to="/create">New Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;