import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Drawer, Button } from 'antd'
import {
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  ContactsOutlined,
  ReadOutlined,
} from '@ant-design/icons'

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const location = useLocation()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/about',
      icon: <TeamOutlined />,
      label: <Link to="/about">About Us</Link>,
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
    {
      key: '/blogs',
      icon: <ReadOutlined />,
      label: <Link to="/blogs">Blogs</Link>,
    },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Baron's Real Estate
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={menuItems}
              className="border-none bg-transparent"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              className="text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Baron's Real Estate"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={() => setDrawerVisible(false)}
        />
      </Drawer>
    </nav>
  )
}
