'use client'

import { Card, Row, Col, Typography, Space, Avatar } from 'antd'
import {
  UserOutlined,
  TrophyOutlined,
  HomeOutlined,
  HeartOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const teamMembers = [
  {
    id: 1,
    name: 'John Baron',
    position: 'Founder & CEO',
    image: 'https://placehold.co/200x200',
    description:
      "With over 15 years in real estate, John founded Baron's Real Estate with a vision to revolutionize property services.",
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    position: 'Senior Agent',
    image: 'https://placehold.co/200x200',
    description:
      'Sarah specializes in luxury properties and has helped over 200 families find their dream homes.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Commercial Specialist',
    image: 'https://placehold.co/200x200',
    description:
      'Michael focuses on commercial real estate and investment properties with exceptional market insights.',
  },
]

const stats = [
  { icon: <HomeOutlined />, number: '500+', label: 'Properties Sold' },
  { icon: <UserOutlined />, number: '1000+', label: 'Happy Clients' },
  { icon: <TrophyOutlined />, number: '15+', label: 'Years Experience' },
  { icon: <HeartOutlined />, number: '98%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            About Baron's Real Estate
          </Title>
          <Paragraph className="text-xl text-blue-100 max-w-3xl mx-auto">
            Founded on the principles of integrity, expertise, and exceptional
            service, we've been helping families and businesses find their
            perfect properties for over a decade.
          </Paragraph>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" className="w-full">
                <Title level={2}>Our Story</Title>
                <Paragraph className="text-lg text-gray-600">
                  Baron's Real Estate was established in 2008 with a simple
                  mission: to provide honest, professional, and personalized
                  real estate services that exceed our clients' expectations.
                </Paragraph>
                <Paragraph className="text-lg text-gray-600">
                  What started as a small family business has grown into one of
                  the most trusted real estate agencies in the region, but we've
                  never lost sight of our core values and commitment to personal
                  service.
                </Paragraph>
                <Paragraph className="text-lg text-gray-600">
                  Today, we continue to help individuals, families, and
                  businesses navigate the complex world of real estate with
                  confidence and peace of mind.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <img
                src="https://placehold.co/600x400"
                alt="Our Office"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Our Mission & Values</Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are driven by our commitment to excellence and our dedication
              to making real estate transactions as smooth and successful as
              possible.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="h-full border-none shadow-lg">
                <Title level={4} className="text-blue-600 mb-4">
                  Our Mission
                </Title>
                <Paragraph className="text-gray-600">
                  To provide exceptional real estate services that help our
                  clients achieve their property goals while building lasting
                  relationships based on trust, integrity, and results.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full border-none shadow-lg">
                <Title level={4} className="text-blue-600 mb-4">
                  Our Values
                </Title>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • <strong>Integrity:</strong> Honest and transparent in all
                    dealings
                  </li>
                  <li>
                    • <strong>Excellence:</strong> Committed to delivering
                    outstanding results
                  </li>
                  <li>
                    • <strong>Service:</strong> Putting our clients' needs first
                  </li>
                  <li>
                    • <strong>Innovation:</strong> Embracing new technologies
                    and methods
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Our Achievements</Title>
            <Paragraph className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <Card className="text-center border-none shadow-lg h-full">
                  <div className="text-4xl text-blue-600 mb-4">{stat.icon}</div>
                  <Title level={2} className="text-gray-800 mb-2">
                    {stat.number}
                  </Title>
                  <Paragraph className="text-gray-600 mb-0">
                    {stat.label}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Meet Our Team</Title>
            <Paragraph className="text-lg text-gray-600">
              Experienced professionals dedicated to your success
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {teamMembers.map((member) => (
              <Col xs={24} md={8} key={member.id}>
                <Card className="text-center border-none shadow-lg h-full">
                  <Avatar size={120} src={member.image} className="mb-4" />
                  <Title level={4} className="mb-2">
                    {member.name}
                  </Title>
                  <div className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </div>
                  <Paragraph className="text-gray-600">
                    {member.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  )
}
