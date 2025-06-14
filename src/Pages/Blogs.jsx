// import { Input } from '@/components/ui/input'

import {
  Card,
  Row,
  Col,
  Typography,
  Input,
  Tag,
  Avatar,
  Space,
  Button,
} from 'antd'
import {
  CalendarOutlined,
  UserOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: '10 Tips for First-Time Home Buyers',
    excerpt:
      'Buying your first home can be overwhelming. Here are essential tips to help you navigate the process with confidence and make informed decisions.',
    content:
      'Complete guide covering everything from getting pre-approved to closing day...',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    category: 'Buying Tips',
    readTime: '5 min read',
    views: 1250,
    image: 'https://placehold.co/400x200',
    tags: ['First Time Buyers', 'Tips', 'Home Buying'],
  },
  {
    id: 2,
    title: 'Real Estate Market Trends 2024',
    excerpt:
      'An in-depth analysis of current market conditions, price trends, and what to expect in the coming months for both buyers and sellers.',
    content: 'Market analysis showing current trends and future predictions...',
    author: 'John Baron',
    date: '2024-01-10',
    category: 'Market Analysis',
    readTime: '8 min read',
    views: 2100,
    image: 'https://placehold.co/400x200',
    tags: ['Market Trends', '2024', 'Analysis'],
  },
  {
    id: 3,
    title: 'How to Stage Your Home for Quick Sale',
    excerpt:
      "Professional staging tips that can help your home sell faster and for a better price. Learn what buyers are looking for in today's market.",
    content: 'Professional staging advice from our experienced team...',
    author: 'Michael Chen',
    date: '2024-01-05',
    category: 'Selling Tips',
    readTime: '6 min read',
    views: 890,
    image: 'https://placehold.co/400x200',
    tags: ['Home Staging', 'Selling', 'Tips'],
  },
  {
    id: 4,
    title: 'Investment Properties: What You Need to Know',
    excerpt:
      "Thinking about real estate investment? Here's everything you need to know about buying, managing, and profiting from investment properties.",
    content: 'Comprehensive guide to real estate investment strategies...',
    author: 'Sarah Mitchell',
    date: '2023-12-28',
    category: 'Investment',
    readTime: '10 min read',
    views: 1680,
    image: 'https://placehold.co/400x200',
    tags: ['Investment', 'Property Management', 'ROI'],
  },
  {
    id: 5,
    title: 'Understanding Mortgage Options',
    excerpt:
      'Navigate the complex world of mortgages with our comprehensive guide to different loan types, rates, and what might work best for your situation.',
    content:
      'Detailed breakdown of mortgage types and qualification requirements...',
    author: 'John Baron',
    date: '2023-12-20',
    category: 'Financing',
    readTime: '7 min read',
    views: 1420,
    image: 'https://placehold.co/400x200',
    tags: ['Mortgages', 'Financing', 'Loans'],
  },
  {
    id: 6,
    title: 'Neighborhood Guide: Downtown District',
    excerpt:
      "Explore one of the city's most vibrant neighborhoods. From schools and amenities to local hotspots, here's everything you need to know.",
    content:
      'Complete neighborhood overview including schools, amenities, and lifestyle...',
    author: 'Michael Chen',
    date: '2023-12-15',
    category: 'Neighborhoods',
    readTime: '4 min read',
    views: 750,
    image: 'https://placehold.co/400x200',
    tags: ['Neighborhoods', 'Downtown', 'Local Guide'],
  },
]

const categories = [
  'All',
  'Buying Tips',
  'Selling Tips',
  'Market Analysis',
  'Investment',
  'Financing',
  'Neighborhoods',
]

export default function Blogs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            Real Estate Insights & Tips
          </Title>
          <Paragraph className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest real estate news, market trends, and
            expert advice from the Baron's Real Estate team.
          </Paragraph>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                type={category === 'All' ? 'primary' : 'default'}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Title level={2} className="text-center mb-2">
              Featured Article
            </Title>
            <Paragraph className="text-center text-gray-600">
              Our most popular recent post
            </Paragraph>
          </div>

          <Card className="border-none shadow-lg">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} lg={12}>
                <img
                  src="https://placehold.co/800x256"
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </Col>
              <Col xs={24} lg={12}>
                <Space direction="vertical" size="middle" className="w-full">
                  <Tag color="blue">{blogPosts[0].category}</Tag>
                  <Title level={3} className="mb-0">
                    {blogPosts[0].title}
                  </Title>
                  <Paragraph className="text-gray-600 text-lg">
                    {blogPosts[0].excerpt}
                  </Paragraph>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <UserOutlined />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarOutlined />
                      <span>
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <EyeOutlined />
                      <span>{blogPosts[0].views} views</span>
                    </div>
                  </div>
                  <Button type="primary" icon={<ArrowRightOutlined />}>
                    Read Full Article
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Title level={2} className="text-center mb-2">
              Latest Articles
            </Title>
            <Paragraph className="text-center text-gray-600">
              Expert insights and tips from our real estate professionals
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {blogPosts.slice(1).map((post) => (
              <Col xs={24} md={12} lg={8} key={post.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={post.title}
                      src="https://placehold.co/400x192"
                      className="h-48 object-cover"
                    />
                  }
                  className="h-full"
                  actions={[
                    <Button
                      type="link"
                      icon={<ArrowRightOutlined />}
                      key="read"
                    >
                      Read More
                    </Button>,
                  ]}
                >
                  <Space direction="vertical" size="small" className="w-full">
                    <div className="flex justify-between items-center">
                      <Tag color="blue">{post.category}</Tag>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>

                    <Title level={4} className="mb-2 line-clamp-2">
                      {post.title}
                    </Title>

                    <Paragraph className="text-gray-600 mb-3 line-clamp-3">
                      {post.excerpt}
                    </Paragraph>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <div className="flex items-center space-x-1">
                          <EyeOutlined />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12">
            <Button type="primary" size="large">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-white mb-4">
            Stay Updated with Real Estate Insights
          </Title>
          <Paragraph className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and never miss important market updates,
            tips, and exclusive content.
          </Paragraph>
          <div className="max-w-md mx-auto">
            <Space.Compact className="w-full">
              <Input
                placeholder="Enter your email address"
                size="large"
                className="flex-1"
              />
              <Button
                type="default"
                size="large"
                className="bg-white text-blue-600 border-none hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </Space.Compact>
          </div>
        </div>
      </section>
    </div>
  )
}
