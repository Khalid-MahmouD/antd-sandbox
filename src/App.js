<<<<<<< HEAD
import "@ant-design/v5-patch-for-react-19";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import "./App.css";
=======
// import React, { useState } from "react";
// import '@ant-design/v5-patch-for-react-19';
// import { Tabs, Form, Button, message } from "antd";
// import FormComponent from "./components/FormComponent";
// import TableComponent from "./components/TableComponent";
// import EditModal from "./components/EditModal";

// const { TabPane } = Tabs;

// const CustomerProcess = () => {
//   const [form] = Form.useForm();
//   const [editForm] = Form.useForm();
//   const [data, setData] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [loadingSubmit, setLoadingSubmit] = useState(false);
//   const [loadingEdit, setLoadingEdit] = useState(false);

//   const handleFormSubmit = (values) => {
//     setLoadingSubmit(true);
//     setTimeout(() => {
//       console.log(values);
//       setData({ ...values, key: Date.now() });
//       setLoadingSubmit(false);
//       message.success("Form submitted successfully!");
//       form.resetFields(); // Optional: reset form after submit
//     }, 1000);
//   };
//   // make it handle for submitting the form


//   const showEditModal = () => {
//     editForm.setFieldsValue(data);
//     setIsModalVisible(true);
//   };

//   const handleEditSubmit = (values) => {
//     setLoadingEdit(true);
//     console.log(values);
//     setTimeout(() => {
//       setData(values);
//       setIsModalVisible(false);
//       setLoadingEdit(false);
//       message.success("Data updated successfully!");
//     }, 1000);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       key: "phone",
//       dataIndex: 'phone',
//     },
//     {
//       title: 'Address',
//       key: 'address',
//       dataIndex: 'address'
//     },
//     {
//       title: 'Notes',
//       key: 'notes',
//       dataIndex: 'notes'
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Button type="link" onClick={showEditModal}>
//           Edit
//         </Button>
//       ),
//     }
//   ];

//   const dataSource = data
//     ? [
//       {
//         key: Date.now(), // Generate a unique dynamic key using the current timestamp
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         address: data.address,
//         notes: data.notes,
//       },
//     ]
//     : [];

//   return (
//     <div >
//       <Tabs defaultActiveKey="1" centered>
//         <TabPane tab="Fill Form" key="1">
//           <FormComponent form={form} onFinish={handleFormSubmit} loadingSubmit={loadingSubmit} />
//         </TabPane>

//         <TabPane tab="View Data" key="2">
//           <TableComponent columns={columns} data={dataSource} />
//         </TabPane>
//       </Tabs>
//       <EditModal
//         isModalVisible={isModalVisible}
//         handleCancel={handleCancel}
//         editForm={editForm}
//         handleEditSubmit={handleEditSubmit}
//         loadingEdit={loadingEdit}
//       />
//     </div>
//   );
// };

// export default CustomerProcess;
// FormWithEditor.js
import React, { useState } from 'react';
import { Form, Button } from 'antd';
import TiptapEditor from './Editor';

const FormWithEditor = () => {
  const [form] = Form.useForm();
  const [editorValue, setEditorValue] = useState('<p>Hello, world!</p>');

  const onFinish = (values) => {
    console.log('Submitted:', values);
  };
>>>>>>> 09a1966 (feat: integrate Tiptap editor into form component)

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <Form
          autoCapitalize="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your name" },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback>
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback>
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long, include one uppercase letter and one number",
              },
            ]}>
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
            hasFeedback>
            <Input.Password placeholder="Type your password again" />
          </Form.Item>

          <Form.Item label="Gender" name="gender">
            <Select placeholder="select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Data of Birth" name="dob">
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Choose your date of birth"></DatePicker>
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item name="agreement" wrapperCol={{ span: 24 }}>
            <Checkbox>
              Agree to our <a href="#">Terms of Condition </a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
=======
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Content"
        name="content"
        rules={[{ required: true, message: 'Please enter content' }]}
      >
        <TiptapEditor value={editorValue} onChange={setEditorValue} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
>>>>>>> 09a1966 (feat: integrate Tiptap editor into form component)
  );
}

<<<<<<< HEAD
export default App;
=======
export default FormWithEditor;
>>>>>>> 09a1966 (feat: integrate Tiptap editor into form component)
