import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Alert } from 'antd'

function ErrorAlert({ message }) {
  return (
    <div>
      <Alert
        className="my-1 text-red-800"
        message={message}
        type="error"
        icon={<ExclamationCircleOutlined />}
        showIcon
      />
    </div>
  )
}

export default ErrorAlert
