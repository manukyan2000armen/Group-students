
import { Link } from 'react-router-dom'
import  './style.scss'

function MyMenu() {
  return (
    <div className='d1'>
        <nav>
            <ul>
                <li><Link to={"/"}>Groups</Link></li>
                <li><Link to={"/add-group"}>Add Groups</Link></li>
            </ul>
        </nav>
      </div>
  )
}

export default MyMenu