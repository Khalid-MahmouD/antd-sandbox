import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  message,
} from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function Contact() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Form submitted:', values)
    message.success('Thank you for your message! We will get back to you soon.')
    form.resetFields()
  }

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-2xl text-blue-600" />,
      title: 'Phone',
      content: '(555) 123-4567',
      description: 'Mon-Fri 9AM-6PM',
    },
    {
      icon: <MailOutlined className="text-2xl text-blue-600" />,
      title: 'Email',
      content: 'info@baronsrealestate.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-600" />,
      title: 'Address',
      content: '123 Main Street',
      description: 'City, State 12345',
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-blue-600" />,
      title: 'Office Hours',
      content: 'Mon-Fri: 9AM-6PM',
      description: 'Sat: 10AM-4PM',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            Contact Us
          </Title>
          <Paragraph className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your real estate journey? Get in touch with our
            expert team today. We're here to help you every step of the way.
          </Paragraph>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            {/* Contact Form */}
            <Col xs={24} lg={12}>
              <Card className="border-none shadow-lg h-full">
                <Title level={3} className="mb-6">
                  Send Us a Message
                </Title>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your first name',
                          },
                        ]}
                      >
                        <Input placeholder="John" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your last name',
                          },
                        ]}
                      >
                        <Input placeholder="Doe" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' },
                    ]}
                  >
                    <Input placeholder="john.doe@example.com" />
                  </Form.Item>

                  <Form.Item name="phone" label="Phone Number">
                    <Input placeholder="(555) 123-4567" />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[
                      { required: true, message: 'Please enter a subject' },
                    ]}
                  >
                    <Input placeholder="I'm interested in..." />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: 'Please enter your message' },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Tell us about your real estate needs..."
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" className="w-full">
                <div>
                  <Title level={3} className="mb-6">
                    Get in Touch
                  </Title>
                  <Paragraph className="text-lg text-gray-600 mb-8">
                    We'd love to hear from you. Whether you're buying, selling,
                    or just have questions about the real estate market, our
                    team is here to help.
                  </Paragraph>
                </div>

                <Row gutter={[16, 24]}>
                  {contactInfo.map((info, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <Card className="border-none shadow-sm h-full">
                        <Space
                          direction="vertical"
                          size="small"
                          className="w-full"
                        >
                          <div className="flex items-center space-x-3">
                            {info.icon}
                            <Title level={5} className="mb-0">
                              {info.title}
                            </Title>
                          </div>
                          <div className="font-semibold text-gray-800">
                            {info.content}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {info.description}
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title level={2}>Visit Our Office</Title>
            <Paragraph className="text-lg text-gray-600">
              Come see us in person at our convenient downtown location
            </Paragraph>
          </div>

          <Card className="border-none shadow-lg">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <EnvironmentOutlined className="text-6xl text-gray-400 mb-4" />
                <Title level={4} className="text-gray-600">
                  Interactive Map
                </Title>
                <Paragraph className="text-gray-500">
                  Map integration would be implemented here
                  <br />
                  123 Main Street, City, State 12345
                </Paragraph>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
