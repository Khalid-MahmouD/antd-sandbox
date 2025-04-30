import { Button, Form, Input, Modal } from "antd"

function EditModal({ isModalVisible, handleCancel, handleEditSubmit, editForm, loadingEdit }) {
    return (
        <Modal
            title="Edit Data"
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        >
            <Form form={editForm} layout="vertical" onFinish={handleEditSubmit}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please enter your email" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: "Please enter your phone" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: "Please enter your address" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Notes"
                    name="notes"
                    rules={[{ required: true, message: "Please enter your notes" }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loadingEdit}
                    >
                        {loadingEdit ? "Saving..." : "Save Changes"}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditModal
