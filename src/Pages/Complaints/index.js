import React, { useContext, useEffect, useState } from 'react';
import { Table, Pagination, Spin,  Avatar, Rate, Space,  } from 'antd';
import axios from 'axios';
import { TokenContext } from '../../Components/TokenProvider';

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const { token } = useContext(TokenContext);
  console.log(token)
  
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/user/complaint?page=${page}&limit=10`, {
        headers:{
          'Content-Type': 'applicaion/json',            
          'Authorization' : `Bearer ${token}`
        }
      });
      console.log(response.data)
      setData(response.data.items);
      setTotalItems(response.data.total);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      render: (text) => <img src={text} alt="complaint" style={{ width: 50 }} />,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
     {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Complaint',
      dataIndex: 'complaint',
      key: 'complaint',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'complaintStatus',
      key: 'status',
    },
    {
      title: 'Report Time',
      dataIndex: 'created_at',
      key: 'created_at',
    },
   
  
  ];

  return (
    <div>
        <Space size={20} direction="vertical">
      
      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            total: totalItems,
            pageSize: 10,
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
          rowKey="id"
        />
      </Spin>
          
      </Space>
    </div>
  );
};

export default PaginatedTable;
