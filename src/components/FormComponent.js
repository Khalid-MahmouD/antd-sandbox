import { Button, Form, Input, message } from "antd"

function FormComponent({ form, onFinish, loadingSubmit }) {

    return (
        <Form
            form={form}
            layout="vertical"
            // wrapperCol={{ span: 20, offset: 9 }}
            // labelCol={{ span: 8, offset: 9 }}
            onFinish={onFinish}
            loading={loadingSubmit}
            initialValues={{ name: "", email: "", phone: "", address: "", notes: "" }}
            style={{ maxWidth: 700, margin: '0 auto' }}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please input your phone!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Notes"
                name="notes"
                rules={[{ required: false }]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loadingSubmit}
                >
                    {loadingSubmit ? "Submitting..." : "Submit"}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormComponent
