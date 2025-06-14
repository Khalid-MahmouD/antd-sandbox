'use client'

import { Button, Card, Row, Col, Typography, Space } from 'antd'
import {
  ArrowRightOutlined,
  HomeOutlined,
  DollarOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography

// Mock property data
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Family Home',
    price: '$450,000',
    location: 'Downtown District',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '2,500',
    image: 'https://placehold.co/300x200',
  },
  {
    id: 2,
    title: 'Luxury Condo',
    price: '$320,000',
    location: 'Riverside Area',
    bedrooms: 2,
    bathrooms: 2,
    sqft: '1,800',
    image: 'https://placehold.co/300x200',
  },
  {
    id: 3,
    title: 'Suburban Villa',
    price: '$680,000',
    location: 'Green Valley',
    bedrooms: 5,
    bathrooms: 4,
    sqft: '3,200',
    image: 'https://placehold.co/300x200',
  },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row align="middle" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" className="w-full">
                <Title
                  level={1}
                  className="text-white mb-0 text-4xl lg:text-6xl"
                >
                  Find Your Dream Home
                </Title>
                <Paragraph className="text-xl text-gray-300 mb-8">
                  At Baron's Real Estate, we help you discover the perfect
                  property that matches your lifestyle and budget. Your dream
                  home is just a click away.
                </Paragraph>
                <Space size="middle">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    onClick={() => navigate('/properties')}
                  >
                    Browse Properties
                  </Button>
                  <Button
                    size="large"
                    className="border-white text-white bg-gray-800 hover:bg-white hover:text-gray-800"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </Button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="relative">
                <img
                  src="https://placehold.co/600x400"
                  alt="Dream Home"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Why Choose Baron's Real Estate?</Title>
            <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and expertise to make your real
              estate journey smooth and successful.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="text-center h-full border-none shadow-lg">
                <HomeOutlined className="text-4xl text-blue-600 mb-4" />
                <Title level={4}>Expert Knowledge</Title>
                <Paragraph className="text-gray-600">
                  Our experienced agents have deep knowledge of local markets
                  and trends to guide you to the best decisions.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full border-none shadow-lg">
                <DollarOutlined className="text-4xl text-green-600 mb-4" />
                <Title level={4}>Best Prices</Title>
                <Paragraph className="text-gray-600">
                  We negotiate the best deals for our clients, ensuring you get
                  maximum value for your investment.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full border-none shadow-lg">
                <TeamOutlined className="text-4xl text-purple-600 mb-4" />
                <Title level={4}>Dedicated Support</Title>
                <Paragraph className="text-gray-600">
                  Our team provides personalized support throughout your entire
                  real estate journey, from start to finish.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Featured Properties</Title>
            <Paragraph className="text-lg text-gray-600">
              Discover our handpicked selection of premium properties
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {featuredProperties.map((property) => (
              <Col xs={24} md={8} key={property.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={property.title}
                      src={property.image ?? 'https://placehold.co/600x400'}
                      className="h-48 object-cover"
                    />
                  }
                  className="h-full"
                >
                  <div className="space-y-2">
                    <Title level={4} className="mb-2">
                      {property.title}
                    </Title>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {property.price}
                    </div>
                    <div className="text-gray-600 mb-3">
                      {property.location}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12">
            <Button type="primary" size="large">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-white mb-4">
            Ready to Find Your Perfect Home?
          </Title>
          <Paragraph className="text-xl text-blue-100 mb-8">
            Let our expert team help you navigate the real estate market and
            find the property of your dreams.
          </Paragraph>
          <Space size="middle">
            <Button
              type="default"
              size="large"
              className="bg-white text-blue-600 border-none hover:bg-gray-100"
            >
              Get Started Today
            </Button>
            <Button
              size="large"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Consultation
            </Button>
          </Space>
        </div>
      </section>
    </div>
  )
}
