import { Input, Table, Spin } from 'antd'
import { useState, useEffect, useRef } from 'react'

const allData = Array.from({ length: 20 }).map((_, index) => ({
  key: index,
  name: `John Brown ${index}`,
  age: 32 + index,
  address: `New York No. ${index} Lake Park`,
}))

function fakeApiSearch(query) {
  // Simulate server-side filtering and delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve(allData)
      const q = query.toLowerCase()
      resolve(
        allData.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.address.toLowerCase().includes(q) ||
            String(item.age).includes(q),
        ),
      )
    }, 700) // 700ms delay to simulate network
  })
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState(allData)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef()

  useEffect(() => {
    setLoading(true)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      fakeApiSearch(searchQuery).then((result) => {
        setData(result)
        setLoading(false)
      })
    }, 400) // debounce delay
    return () => clearTimeout(debounceRef.current)
  }, [searchQuery])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <span className="text-blue-500">{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center my-7 max-w-7xl mx-auto ">
      <Input
        placeholder="Search..."
        className="mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        allowClear
      />
      <Spin spinning={loading}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Spin>
    </div>
  )
}

export default App

// import { Input, Table } from 'antd'
// import { useState } from 'react'

// function App() {
//   const [searchQuery, setSearchQuery] = useState('')
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       filteredValue: [searchQuery],
//       onFilter: (value, record) =>
//         String(record.name).toLowerCase().includes(value.toLowerCase()) ||
//         String(record.address).toLowerCase().includes(value.toLowerCase()) ||
//         String(record.age).toString().includes(value),
//       render: (text) => <span className="text-blue-500">{text}</span>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//     },
//   ]
//   const dataSource = []
//   Array.from({ length: 20 }).forEach((_, index) => {
//     dataSource.push({
//       key: index,
//       name: `John Brown ${index}`,
//       age: 32 + index,
//       address: `New York No. ${index} Lake Park`,
//     })
//   })
//   return (
//     <div className="flex flex-col items-center justify-center my-7 max-w-7xl mx-auto ">
//       <Input
//         placeholder="Search..."
//         className="mb-0"
//         // onSearch={(value) => setSearchQuery(value)}
//         onBlur={(e) => setSearchQuery(e.target.value)}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Table columns={columns} dataSource={dataSource} />
//     </div>
//   )
// }

// export default App
