import "@ant-design/v5-patch-for-react-19";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import "./App.css";

function App() {
  const [form] = Form.useForm();
  function handleChanges(changedValues) {
    if (changedValues.password !== undefined) {
      form.setFieldsValue({ confirmPassword: changedValues.password });
    }
  }
  function handleFinish(values) {
    console.log(values);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form
          form={form}
          onValuesChange={handleChanges}
          onFinish={handleFinish}
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
                pattern: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                message:
                  "Password must be at least 8 characters long, include one uppercase letter and one number",
              },
            ]}
            hasFeedback>
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

          <Form.Item label="Gender" name="gender" requiredMark="Optional">
            <Select placeholder="select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Data of Birth"
            name="dob"
            rules={[{ required: true, message: "choose your date of birth" }]}
            hasFeedback>
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Choose your date of birth"
              picker="date"></DatePicker>
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            rules={[
              { required: true, message: "Please enter your website URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
            hasFeedback>
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To process, need to agree with our terms and conditions"
                      ),
              },
            ]}>
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
  );
}

export default App;
