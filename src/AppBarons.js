'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'

const theme = {
  token: {
    colorPrimary: '#1f2937',
    colorLink: '#3b82f6',
    borderRadius: 8,
  },
}

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="*" element={<div>Page Not Found</div>} />
              <Route path="/blogs/:id" element={<div>Blog Details</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  )
}
