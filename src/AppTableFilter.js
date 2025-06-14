// import { Select, Space, Switch, Table, Typography } from "antd"
// import { useState } from "react";

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//   },
// ];

// function App() {
//   const [order, setOrder] = useState(true);
//   const [sortField, setSortField] = useState("name");
//   const [dataSource, setDataSource] = useState(data);
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//     }
//   ]
//   const options = [
//     { value: "name", label: "Name" },
//     { value: "age", label: "Age" },
//   ]

//   function sortData(field, order) {
//     const sortedData = [...dataSource]
//     if (field === 'name') {
//       order ?
//         sortedData.sort((a, b) => a.name.localeCompare(b.name)) :
//         sortedData.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (field === 'age') {
//       order ?
//         sortedData.sort((a, b) => a.age - b.age) :
//         sortedData.sort((a, b) => b.age - a.age);
//     }
//     setDataSource(sortedData);
//   }
//   function handleFilterChange(value) {
//     setSortField(value);
//     sortData(value, order);
//   }
//   function handleOrderChange(value) {
//     setOrder(value);
//     sortData(sortField, value);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="mb-4">
//         <Space>
//           <span >Select a person:</span>
//           <Select
//             showSearch
//             placeholder="Select a person"
//             optionFilterProp="label"
//             options={options}
//             value={sortField}
//             onChange={handleFilterChange}
//           />
//           <Switch
//             checkedChildren='Asc'
//             unCheckedChildren='Desc'
//             defaultChecked={order}
//             onChange={handleOrderChange}
//           />
//         </Space>
//       </div>
//       <Table columns={columns} dataSource={dataSource} className="w-1/2" />
//     </div>
//   )
// }

// export default App


import { Form, Select, Switch, Table, Space } from "antd";
import { useState } from "react";

const data = [
  { key: "1", name: "John Brown", age: 32 },
  { key: "2", name: "Jim Green", age: 42 },
  { key: "3", name: "Joe Black", age: 32 },
];

const options = [
  { value: "name", label: "Name" },
  { value: "age", label: "Age" },
];

function App() {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState(data);

  function sortData(field, order) {
    const sorted = [...data].sort((a, b) => {
      if (field === "name") {
        return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (field === "age") {
        return order ? a.age - b.age : b.age - a.age;
      }
      return 0;
    });
    setDataSource(sorted);
  }

  function handleValuesChange(changed, all) {
    // all.sortField: "name" or "age"
    // all.order: true (asc) or false (desc)
    sortData(all.sortField, all.order);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Form
        form={form}
        initialValues={{ sortField: "name", order: true }}
        onValuesChange={handleValuesChange}
      >
        <Space>
          <Form.Item name="sortField" noStyle>
            <Select
              style={{ width: 120 }}
              options={options}
              placeholder="Select field"
            />
          </Form.Item>
          <Form.Item name="order" valuePropName="checked" noStyle>
            <Switch checkedChildren="Asc" unCheckedChildren="Desc" />
          </Form.Item>
        </Space>
      </Form>
      <Table columns={[
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" }
      ]} dataSource={dataSource} className="w-1/2 mt-4" />
    </div>
  );
}

export default App;