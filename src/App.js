import React, { useState } from "react";
import '@ant-design/v5-patch-for-react-19';
import { Tabs, Form, Button, message } from "antd";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import EditModal from "./components/EditModal";

const { TabPane } = Tabs;

const CustomerProcess = () => {
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [data, setData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);

  const handleFormSubmit = (values) => {
    setLoadingSubmit(true);
    setTimeout(() => {
      console.log(values);
      setData({ ...values, key: Date.now() });
      setLoadingSubmit(false);
      message.success("Form submitted successfully!");
      form.resetFields(); // Optional: reset form after submit
    }, 1000);
  };
  // make it handle for submitting the form


  const showEditModal = () => {
    editForm.setFieldsValue(data);
    setIsModalVisible(true);
  };

  const handleEditSubmit = (values) => {
    setLoadingEdit(true);
    console.log(values);
    setTimeout(() => {
      setData(values);
      setIsModalVisible(false);
      setLoadingEdit(false);
      message.success("Data updated successfully!");
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address'
    },
    {
      title: 'Notes',
      key: 'notes',
      dataIndex: 'notes'
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button type="link" onClick={showEditModal}>
          Edit
        </Button>
      ),
    }
  ];

  const dataSource = data
    ? [
      {
        key: Date.now(), // Generate a unique dynamic key using the current timestamp
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        notes: data.notes,
      },
    ]
    : [];

  return (
    <div >
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Fill Form" key="1">
          <FormComponent form={form} onFinish={handleFormSubmit} loadingSubmit={loadingSubmit} />
        </TabPane>

        <TabPane tab="View Data" key="2">
          <TableComponent columns={columns} data={dataSource} />
        </TabPane>
      </Tabs>
      <EditModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        editForm={editForm}
        handleEditSubmit={handleEditSubmit}
        loadingEdit={loadingEdit}
      />
    </div>
  );
};

export default CustomerProcess;
