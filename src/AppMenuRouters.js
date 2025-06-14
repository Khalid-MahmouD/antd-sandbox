import {
  DashboardOutlined,
  DashOutlined,
  HolderOutlined,
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex p-4 flex-1">
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <div className="bg-blue-400 font-bold h-20 text-white flex justify-center items-center">
      Header
    </div>
  )
}
function Footer() {
  return (
    <div className="bg-gray-500 font-bold text-white flex justify-center items-center h-20">
      Footer
    </div>
  )
}
function SideMenu() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname)
  function handleMenuClick({ key }) {
    key !== 'Logout' && navigate(key)
  }
  const items = [
    {
      label: 'Home',
      icon: <HomeOutlined />,
      key: '/',
    },
    {
      label: 'Dashboard',
      icon: <DashboardOutlined />,
      key: '/dashboard',
    },
    {
      label: 'User List',
      icon: <UnorderedListOutlined />,
      key: '/users',
      children: [
        {
          label: 'Active Users',
          key: '/users/active',
          icon: <HolderOutlined />,
        },
        {
          label: 'Inactive Users',
          key: '/users/inactive',
          icon: <HolderOutlined />,
        },
      ],
    },
    {
      label: 'Profile',
      icon: <UserOutlined />,
      key: '/profile',
    },
    {
      label: 'Logout',
      icon: <PoweroffOutlined />,
      key: 'Logout',
      danger: true,
    },
  ]
  return (
    <Menu
      items={items}
      onClick={handleMenuClick}
      defaultSelectedKeys={[pathname]}
    />
  )
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
    </div>
  )
}
function UserList() {
  return (
    <div>
      <h1>User List</h1>
      <p>Here is the list of users.</p>
    </div>
  )
}
function ActiveUsers() {
  return (
    <div>
      <h1>Active Users</h1>
      <p>List of active users.</p>
    </div>
  )
}
function InactiveUsers() {
  return (
    <div>
      <h1>Inactive Users</h1>
      <p>List of inactive users.</p>
    </div>
  )
}
function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>This is your profile page.</p>
    </div>
  )
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/active" element={<ActiveUsers />} />
        <Route path="/users/inactive" element={<InactiveUsers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}
