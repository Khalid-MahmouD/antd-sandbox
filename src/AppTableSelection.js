import { useState } from 'react';
import './App.css';
import { Table, Tag } from 'antd';
function App() {
  const [alreadySelected, setAlreadySelected] = useState(['1', '3', '5']);
  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id',
    },
    {
      title: 'Student Name',
      dataIndex: 'name',
    },
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      render: (tag) => {
        const color = tag === 'A+' ? 'green' : tag === 'A' ? 'blue' : tag === 'B+' ? 'orange' : tag === 'B' ? 'yellow' : tag === 'C' ? 'red' : 'gray';
        return <Tag color={color}>{tag}</Tag>
      }
    }
  ]
  const dataSource = [
    {
      key: '1',
      id: '1',
      name: 'John Doe',
      grade: 'A+',
    },
    {
      key: '2',
      id: '2',
      name: 'Jane Smith',
      grade: 'A',
    },
    {
      key: '3',
      id: '3',
      name: 'Sam Brown',
      grade: 'B',
    },
    {
      key: '4',
      id: '4',
      name: 'khan khan',
      grade: 'C',
    },
    {
      key: '5',
      id: '5',
      name: 'Ali Khan',
      grade: 'A+',
    },
    {
      key: '6',
      id: '6',
      name: 'Sara Ali',
      grade: 'B+',
    },
    {
      key: '7',
      id: '7',
      name: 'John Doe',
      grade: 'A+',
    },
    {
      key: '8',
      id: '8',
      name: 'Jane Smith',
      grade: 'A',
    },
    {
      key: '9',
      id: '9',
      name: 'Sam Brown',
      grade: 'B',
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: alreadySelected,
            onChange: (selectedRowKeys) => setAlreadySelected(selectedRowKeys),
            getCheckboxProps: (record) => ({
              disabled: record.grade === 'C', // Column configuration not to be checked
            }),
            onSelect: (payload) => console.log(payload),
            // hideSelectAll: true,
            selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              Table.SELECTION_NONE,
              {
                key: 'selectHalf',
                text: 'Select Half',
                onSelect: (selectedRowKeys) => {
                  const halfKeys = dataSource.slice(0, Math.ceil(dataSource.length / 2)).map(item => item.key);
                  setAlreadySelected(halfKeys);
                },
              },

              {
                key: 'deselectHalf',
                text: 'Deselect Half',
                onSelect: () => {
                  const halfKeys = dataSource.slice(0, Math.ceil(dataSource.length / 2)).map(item => item.key);
                  setAlreadySelected(alreadySelected.filter(key => !halfKeys.includes(key)));
                },
              },


              {
                key: 'selectOdd',
                text: 'Select Odd',
                onSelect: (selectedRowKeys) => {
                  const oddKeys = dataSource.filter((item, index) => item.key % 2 !== 0).map(item => item.key);
                  setAlreadySelected(oddKeys);
                },
              },
              {
                key: 'deselectOdd',
                text: 'Deselect Odd',
                onSelect: () => {
                  const oddKeys = dataSource.filter((item, index) => index % 2 !== 0).map(item => item.key);
                  setAlreadySelected(alreadySelected.filter(key => !oddKeys.includes(key)));
                },
              },
              {
                key: 'madebyme Select Even',
                text: 'Select Even',
                onSelect: (selectedRowKeys) => {
                  const evenKeys = dataSource.filter(item => item.key % 2 === 0).map(item => item.key);
                  setAlreadySelected(evenKeys);
                  // console.log((selectedRowKeys));
                }
              },
              {
                key: 'excellent',
                text: 'Select Excellent',
                onSelect: (selectedRowKeys) => {
                  const excellentKeys = dataSource.filter(
                    item => item.grade.includes('A')
                  ).map(item => item.key);
                  setAlreadySelected(excellentKeys);
                }
              }
            ],
          }

          }
        >

        </Table>
      </header>
    </div >
  );
}

export default App;
