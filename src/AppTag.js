import { Button, Space, Tag } from 'antd'
import 'antd/dist/reset.css'
import { DeleteOutlined, Loading3QuartersOutlined} from '@ant-design/icons'
function App() {
  const existingTag = ['Tag Content', 'Tag Content', 'Tag Content', 'Tag Content']
  return (
    <div
      className='flex justify-center items-center h-screen w-full bg-gray-100'
    >
      <Space direction='vertical' size='middle'>
        <Tag> Tag Content</Tag>
        <Tag>Tag Content</Tag>
        <Tag closable onClose={() => console.log('IS CLOSED')}>Tag Content</Tag>
        <Tag color='error' closable closeIcon={<Button danger type='text'>X</Button>} onClose={() => console.log('IS CLOSED')}>Error</Tag>
        <Tag color='error' closable closeIcon={<DeleteOutlined />} onClose={() => console.log('IS CLOSED')}>Custom remove Icon</Tag>
        <Tag color='#f0f' closable closeIcon={<DeleteOutlined />} onClose={() => console.log('IS CLOSED')}>Custom color tag</Tag>
        <Tag className='bg-red-200 text-yellow-300 border border-cyan-500 rounded-sm' closable closeIcon={<DeleteOutlined style={{color:'white'}} />} onClose={() => console.log('IS CLOSED')}>Custom tag</Tag>
        <Tag className='bg-red-200 text-yellow-300 border border-cyan-500 rounded-sm' closable closeIcon={<DeleteOutlined style={{ color: 'white' }} />} onClose={() => console.log('IS CLOSED')}>
          <Button className='bg-transparent border-none text-white hover:bg-transparent'>Button Tag</Button>
        </Tag>
        <Tag closable={false} icon={<Loading3QuartersOutlined spin />} className='bg-red-200 text-yellow-300 border border-cyan-500 rounded-sm' onClose={() => console.log('IS CLOSED')}>
          <Button className='bg-transparent border-none text-white hover:bg-transparent'>Button Tag</Button>
        </Tag>
        <Space direction='horizontal' size='middle'>
          { 
            existingTag.map((tag, index) => (
              <Tag key={index} closable color='green'>{tag}</Tag>
            ))
          }
        </Space>
      </Space>
    </div>
  )
}

export default App
