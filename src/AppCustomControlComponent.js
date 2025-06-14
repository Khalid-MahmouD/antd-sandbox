// How to add custom controls inside antd
// add counter inside
// read only

import { Button, Form, Input, message, Space } from 'antd'
import ErrorAlert from './components/Alert/ErrorAlert'

function PlayerScores({ value, onChange }) {
  return (
    <Space direction="horizontal" size="middle">
      <Button type="primary" onClick={() => onChange(value + 1)}>
        +
      </Button>
      <span className="mx-2">{value}</span>
      <Button type="primary" onClick={() => onChange(value - 1)}>
        -
      </Button>
    </Space>
  )
}
// validation before submit
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Form
        onFinish={(values) => console.log(values)}
        onFinishFailed={(errorInfo) => console.log('Failed:', errorInfo)}
        initialValues={{ playerScore: 0, adminEmail: 'ssf@email.com' }}
      >
        <Form.Item
          label="Player Name"
          name="playerName"
          rules={[
            {
              required: true,
              message: (
                <ErrorAlert message={'Please input your player name!'} />
              ),
            },
            {
              min: 3,
              message: 'Player name must be at least 3 characters long!',
            },
            { max: 20, message: 'Player name cannot exceed 20 characters!' },
          ]}
        >
          <Input placeholder="Enter player name" />
        </Form.Item>

        <Form.Item
          label="Player Score"
          name="playerScore"
          rules={[
            {
              required: true,
              message: <ErrorAlert message="Please input your player score!" />,
            },
            {
              validator: (rule, value) => {
                if (value < 0) {
                  return Promise.reject(
                    <ErrorAlert message="Score cannot be negative!" />,
                  )
                }
                return Promise.resolve()
              },
            },
          ]}
        >
          <PlayerScores />
        </Form.Item>

        <Form.Item
          label="Admin Email"
          name="adminEmail"
          rules={[
            {
              type: 'email',
              message: <ErrorAlert message="Please input a valid email!" />,
            },
            {
              validator: (rule, value) => {
                if (!String(value).startsWith('admin')) {
                  return Promise.reject(
                    <ErrorAlert message="Email should start with 'admin'!" />,
                  )
                }
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default App
