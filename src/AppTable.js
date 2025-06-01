import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchRecords();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Body',
      dataIndex: 'body'
    }
  ];

  const fetchRecords = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setDataSource(response.data);
      })
      .catch(error => {
        console.error('Error fetching records:', error);
      });
  };

  // Paginate data for current page
  const paginatedData = dataSource.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Posts Table</h1>
      <Table
      columns={columns}
      dataSource={paginatedData}
      rowKey="id"
      bordered
      pagination={{
        current: page,
        pageSize: pageSize,
        total: dataSource.length,
        onChange: (page) => setPage(page),
        showSizeChanger: false,
      }}
      style={{ textAlign: 'center' }}
      />
    </div>);
          // className="ant-table-striped"
  //       />
  //     {/* </div> */}
  //   </div>
  // );
}

export default App;
