import {
  MinusCircleTwoTone,
  MinusSquareTwoTone,
  PlusCircleTwoTone,
} from '@ant-design/icons'
import { Descriptions, Table } from 'antd'

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Descriptions',
      dataIndex: 'descriptions',
    },
  ]
  const dataSource = []
  Array.from({ length: 10 }).forEach((_, index) => {
    dataSource.push({
      key: index,
      name: `Test ${index}`,
      age: 32 + index,
      address: `London, Park Lane no. ${index}`,
      descriptions: 'Description ' + index,
      companyName: `Company ${index}`,
      companyStrength: `Strength ${index}`,
    })
  })

  const nestedColumns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      title: 'Company Strength',
      dataIndex: 'companyStrength',
    },
  ]
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto justify-center min-h-screen bg-gray-100 p-4">
      <Table
        columns={columns}
        dataSource={dataSource}
        expandable={{
          rowExpandable: (record) => true,
          expandedRowRender: (record) => {
            if (record.age === 33)
              return <Table columns={nestedColumns} dataSource={dataSource} />
            return <p>{record.descriptions}</p>
          },
          defaultExpandAllRows: false,
          defaultExpandedRowKeys: [1, 2],
          expandRowByClick: true,
          expandIcon: ({ expanded, onExpand, record }) => {
            if (record.age <= 33) return null
            return expanded ? (
              <MinusCircleTwoTone
                onClick={(e) => {
                  console.log(e, record)
                  onExpand(record, e)
                }}
              />
            ) : (
              <PlusCircleTwoTone
                onClick={(e) => {
                  console.log(e)
                  onExpand(record, e)
                }}
              />
            )
          },
        }}
      />
    </div>
  )
}

export default App
