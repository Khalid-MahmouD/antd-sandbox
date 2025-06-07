import { Pagination, Space } from "antd";
import "./App.css";
// import { DeleteOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='App-header'>
      <Space size={20} direction='vertical'>
        <Pagination total={20} pageSize={10} />
        <Pagination total={20} pageSize={10} defaultCurrent={2} />
        <Pagination total={200} pageSize={10} defaultCurrent={2} />
        <Pagination total={20}  showSizeChanger />
        <Pagination total={20} showSizeChanger pageSizeOptions={[
          1,2,10,30
        ]}
          onShowSizeChange={
            (current, size) => console.log(current, size)
          }
        />
        <Pagination total={20} pageSize={5} showSizeChanger showQuickJumper />
        <Pagination simple total={20} pageSize={5} showSizeChanger showQuickJumper />
        <Pagination
          total={20}
          pageSize={5}
          showQuickJumper
          defaultCurrent={2}
          itemRender={
            (page, type, element) => {
              if (type === "prev") {
                return <a>Previous</a>;
              }
              else if (type === "next") {
                return <a>Next</a>;
              }
              else if (type === "page") {
                return <a>Page#{page}</a>;
              }
            }
            
          }
          current={currentPage}
          onChange={(page, pageSize) => setCurrentPage(page)}
        />
        <div className="red">
          Showing the content of page {currentPage}
        </div>
      </Space>
    </div>
  );
}

export default App;
