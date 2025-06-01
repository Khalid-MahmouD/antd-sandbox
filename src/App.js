import { Menu, Space, AutoComplete } from 'antd'
import 'antd/dist/reset.css'
import { DashboardOutlined, DollarCircleOutlined, EditOutlined, HomeFilled, MoneyCollectOutlined, SwapLeftOutlined, SwitcherOutlined } from '@ant-design/icons'
import { useState } from 'react'

const dataSource = [
  'Home',
  'Dashboard',
  'Revenue',
  'Expenses',
  'User Management',
  'Edit Profile',
  'Change Account',
  'Signout'
];

const labelToKeyMap = {
  'Home': 'home',
  'Dashboard': 'dashboard',
  'Revenue': 'revenue',
  'Expenses': 'expenses',
  'User Management': 'user-management',
  'Edit Profile': 'edit-profile',
  'Change Account': 'change-account',
  'Signout': 'signout'
};

function App() {
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedKey, setSelectedKey] = useState(['home']);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (!value) {
      setOptions([]);
      return;
    }
    const filtered = dataSource
      .filter(item => item.toLowerCase().includes(value.toLowerCase()))
      .map(item => ({ value: item }));
    setOptions(filtered);
  };

  const handleSelect = (value) => {
    setSearchValue(value);
    const key = labelToKeyMap[value];
    if (key && key !== 'search') {
      setSelectedKey([key]);
    }
  };

  const handleMenuClick = (info) => {
    if (info.key !== 'search') {
      setSelectedKey([info.key]);
    }
  };

  console.log(selectedKey);
  return (
    <div className='flex justify-center flex-col items-center h-screen max-w-xl mx-auto bg-gray-100'>
      <Space>
        <Menu
          mode='inline'
          selectedKeys={selectedKey}
          onClick={handleMenuClick}
          defaultOpenKeys={['dashboard', 'user-management']}
          items={[
            {
              label: (
                <AutoComplete
                  options={options}
                  style={{ width: 200 }}
                  value={searchValue}
                  onSearch={handleSearch}
                  onSelect={handleSelect}
                  placeholder="Search..."
                  allowClear
                />
              ),
              key: 'search',
              icon: <SwapLeftOutlined />,
            },
            {
              label: 'Home',
              key: 'home',
              icon: <HomeFilled />
            },
            {
              label: 'Dashboard',
              key: 'dashboard',
              icon: <DashboardOutlined />,
              children: [
                {
                  label: 'Revenue',
                  key: 'revenue',
                  icon: <DollarCircleOutlined />
                },
                {
                  label: <span style={{ color: '#f00' }}>Expenses</span>,
                  key: 'expenses',
                  icon: <MoneyCollectOutlined />
                },
              ]
            },
            {
              label: 'User Management',
              key: 'user-management',
              type: 'group',
              children: [
                {
                  label: 'Edit Profile',
                  key: 'edit-profile',
                  icon: <EditOutlined />
                },
                {
                  label: 'Change Account',
                  key: 'change-account',
                  icon: <SwitcherOutlined />
                }
              ]
            },
            {
              label: 'Signout',
              key: 'signout',
              danger: true,
            }
          ]}
        />
      </Space>
    </div>
  )
}

export default App
