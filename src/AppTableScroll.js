import { Table } from 'antd'

function App() {
  const columns = []
  Array.from({ length: 5 }).forEach((_, i) => {
    columns.push({
      title: `Column ${i + 1}`,
      dataIndex: `col${i + 1}`,
      key: `col${i + 1}`,
      width: 100,
    })
  })

  const dataSource = Array.from({ length: 5 }).map((_, i) => {
    const row = {}
    columns.forEach((col, j) => {
      row[col.dataIndex] = `R ${i + 1} C ${j + 1}`
    })
    return row
  })

  return (
    <div className="flex flex-col items-center justify-center h-lvh ">
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default App
