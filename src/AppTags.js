import { Space, Tag, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import ItemsSelect from "./components/Item";

function App() {
  const handleChange = (value) => {
    console.log("Selected values:", value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <Space size={7} direction='vertical'>
        <ItemsSelect onChange={handleChange} /> {/* Using ItemsSelect component */}
        
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag
          color='error'
          closeIcon={
            <Button danger type='text'>
              X
            </Button>
          }
          closable
          onClose={() => {
            console.log("tag is closed");
          }}>
          Tag3
        </Tag>
        <Tag
          color='error'
          closeIcon={
            <DeleteOutlined />
          }
          closable
          onClose={() => {
            console.log("tag is closed");
          }}>
          Tag4
        </Tag>
      </Space>
    </div>
  );
}

export default App;