import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Space } from 'antd'

function App() {
  function handleOnFinish(values) {
    console.log('Form values:', values)
    // You can handle the form submission here, e.g., send to an API
  }
  const initialValues = {
    teacher: 'John Doe',
    class: 'Math 101',
    students: [
      { first: 'Alice', last: 'Smith', gender: 'female' },
      { first: 'Bob', last: 'Johnson', gender: 'male' },
    ],
  }
  return (
    <div className="flex justify-center flex-col items-center h-screen max-w-xl mx-auto bg-gray-100">
      <Form
        onFinish={handleOnFinish}
        colon={false}
        initialValues={initialValues}
        style={{ width: '80%' }}
      >
        <Form.Item
          label="teacher"
          name="teacher"
          align="right"
          rules={[{ required: true, message: 'Please enter teacher name' }]}
        >
          <Input placeholder="Enter teacher name" />
        </Form.Item>
        <Form.Item
          label="class name"
          name="class"
          rules={[{ required: true, message: 'Please enter class name' }]}
        >
          <Input placeholder="Enter class name" />
        </Form.Item>

        <Form.List name={'students'}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space
                    direction="horizontal"
                    size={10}
                    key={field.key}
                    align="baseline"
                  >
                    <Form.Item
                      name={[field.name, 'first']}
                      label={`student ${index + 1}`}
                      rules={[
                        { required: true, message: 'Please enter first name' },
                      ]}
                    >
                      <Input placeholder="Enter first name" />
                    </Form.Item>
                    <Form.Item name={[field.name, 'last']}>
                      <Input placeholder="Enter last name" />
                    </Form.Item>
                    <Form.Item name={[field.name, 'gender']}>
                      <Select placeholder="Select gender">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{
                        color: 'red',
                        cursor: 'pointer',
                      }}
                      onClick={() => remove(field.name)}
                    />
                  </Space>
                )
              })}
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => add()}
                  block
                  icon={<PlusCircleOutlined />}
                >
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default App
