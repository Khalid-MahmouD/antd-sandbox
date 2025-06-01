import { Typography } from 'antd'
import 'antd/dist/reset.css'
import { CheckOutlined, SmileFilled } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph, Link } = Typography
function App() {
  const [text, setText] = useState('Code with me')
  return (

    <div
      className='flex justify-center flex-col items-center h-screen  max-w-xl mx-auto bg-gray-100'
    >
      <Title level={1}> Code with me</Title>
      <Title level={2}> Code with me</Title>
      <Title level={3}> Code with me</Title>
      <Title level={4}> Code with me</Title>
      <Text>Code with me</Text>
      <Text strong>Code with me</Text>
      <Text underline>Code with me</Text>
      <Text mark>Code with me</Text>
      <Text disabled>Code with me</Text>
      <Text type='danger'>Code with me</Text>
      <Text type='success'>Code with me</Text>
      <Text type='danger'>Code with me</Text>
      <Text type='secondary'>Code with me</Text>
      <Link href='/' underline>Code with me</Link>

      <Paragraph editable={
        {
          onChange: (value) => {
            setText(value)
          },
          triggerType: 'icon|text',
          autoSize: { minRows: 2, maxRows: 6 },
          tooltip: 'Click to edit',
          icon: false,
        }
      } >{text}</Paragraph>
      <Paragraph editable={
        {
          onChange: (value) => {
            setText(value)
          },
          triggerType: 'icon|text',
          autoSize: { minRows: 2, maxRows: 6 },
          tooltip: 'Click to edit',
          icon: <SmileFilled />,
          enterIcon: <CheckOutlined />,
        }
      } >{text}</Paragraph>

      <Paragraph copyable={{ text: 'Code with me', tooltips: ['Copy', 'Copied'] }}>Text with me</Paragraph>
      <Paragraph
        style={{ width: '300px' }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: 'show more',
          tooltip: 'Click to expand',
          onExpand: (expanded) => {
            console.log(expanded ? 'Expanded' : 'Collapsed')
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Paragraph
        style={{ width: '300px' }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: 'show more',
          suffix: 'Read more',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
    </div>
  )
}

export default App
