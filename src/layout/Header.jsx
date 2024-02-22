import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';



const HomeNav = [
  { to : '/', text: 'หน้าหลัก' },
  { to : '/login', text: 'เข้าสู่ระบบ' },
  { to : '/register', text: 'ลงทะเบียน' },
]

const userNav = [
  { to : '/', text: 'รายการแจ้งซ่อมของคุณ' },
  { to : '/new', text: 'แจ้งซ่อม' },
]

export default function Header() {
  const {admin,user, logout} = useAuth()
  const finalNav = user?.id ? userNav : HomeNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
        <div className="bg-neutral text-neutral-content rounded-full w-12">
          <span> {user?.id ? user.username : 'Gust'}</span>
        </div>
        {/* {user?.id ? user.username : 'Gust'} */}
        
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}
