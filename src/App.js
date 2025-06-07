import { Form, Input } from "antd";
import "./App.css";
// import { DeleteOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

function App() {
  return (
    <div className='App-header'>
      <Form>
        <Form.Item
              name="NameAr"
              label="Name (Arabic)"
              colon={false}
              labelCol={{
                span: 24,
                className: "[&>label]:text-red-100 [&>label]:text-primary-font [&>label]:font-bold",
              }}
              className="m-0 mb-4 w-full"
            >
              <Input  placeholder="Name (Arabic)" />
            </Form.Item>
      </Form>
    </div>
  );
}

export default App;
