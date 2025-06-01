import { Button, Form, Input, Space, Table } from 'antd'
import 'antd/dist/reset.css'
import { DeleteOutlined, EditFilled} from '@ant-design/icons'
import { useEffect, useState } from 'react'
const DATA = 
  [
    { name: 'John Doe', address: '123 Main St', key: '1' },
    { name: 'Jane Smith', address: '456 Elm St', key: '2' },
    { name: 'Alice Johnson', address: '789 Oak St', key: '3' },
    { name: 'Bob Brown', address: '101 Pine St', key: '4' },
  ]

function App() {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    if (!dataSource || dataSource.length === 0) {
      setDataSource(DATA);
    }
  }, [dataSource]);

  const columns = [
    {
      title: 'Name', dataIndex: 'name', key: 'column1',
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
              style={{ margin: 0 }}
            >
              <Input
                
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
     },
    {
      title: 'Address', dataIndex: 'address', key: 'column2',
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name='address'
              initialValue={text}
              style={{ margin: 0 }}
            >
              <Input
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
     },
    {
      title: 'Actions', key: 'column3',
      render: (_, record) => {
        return <>
          <Space>
            <Button type='link' icon={<DeleteOutlined />} />
            <Button type='link' icon={<EditFilled />} onClick={() => {setEditRow(record.key); form.setFieldsValue(record);}} />
          </Space>
        </>
      }
     },
    
  ]

  function onFinish(values) {
    const updatedDataSource = [...dataSource];
    // Find the index of the row being edited
    // all we can do is just 
    const rowIndex = dataSource.findIndex(item => item.key === editRow);
    if (rowIndex !== -1) {
      updatedDataSource[rowIndex] = { ...values, key: editRow };
      setDataSource(updatedDataSource);
    }
    setEditRow(null);
  }
  return (

    <div
      className='flex justify-center items-center h-screen w-full bg-gray-100'
    >
      <Form
        form={form}
        size='small'
        onFinish={onFinish}
        className='bg-white p-4 rounded-lg shadow-md'
      >

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          onRow={record => ({
            onBlur: () => {
              if (editRow === record.key) {
                form.submit();
              }
            },
            onDoubleClick: () => {
              setEditRow(record.key);
              form.setFieldsValue(record);
            }
          })}
          />
      </Form>
    </div>
  )
}

export default App
