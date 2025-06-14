'use client'

import { Row, Col, Typography, Space } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

const { Title, Text } = Typography

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} lg={6}>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-xl">B</span>
                </div>
                <Title level={4} className="text-white mb-0">
                  Baron's Real Estate
                </Title>
              </div>
              <Text className="text-gray-300">
                Your trusted partner in finding the perfect home. We make real
                estate dreams come true.
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white mb-4">
              Contact Info
            </Title>
            <Space direction="vertical" className="text-gray-300">
              <div className="flex items-center space-x-2">
                <PhoneOutlined />
                <Text className="text-gray-300">(555) 123-4567</Text>
              </div>
              <div className="flex items-center space-x-2">
                <MailOutlined />
                <Text className="text-gray-300">info@baronsrealestate.com</Text>
              </div>
              <div className="flex items-center space-x-2">
                <EnvironmentOutlined />
                <Text className="text-gray-300">
                  123 Main Street, City, State 12345
                </Text>
              </div>
            </Space>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white mb-4">
              Quick Links
            </Title>
            <Space direction="vertical" className="text-gray-300">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="/blogs"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blogs
              </a>
            </Space>
          </Col>

          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white mb-4">
              Follow Us
            </Title>
            <Space size="large">
              <FacebookOutlined className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <TwitterOutlined className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <LinkedinOutlined className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </Space>
          </Col>
        </Row>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <Text className="text-gray-400">
            © {new Date().getFullYear()} Baron's Real Estate. All rights
            reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
