import { Pagination, Space, Table, Tag } from "antd";
import React, { useState }  from "react";
import { GET_USERS } from "../../api/ApiConstant";
import { getData } from "../../api/commonServices";
import useSWR from "swr";
import useFetch from "../../hooks/useFetch";


const Users = () => {
    const [current, setCurrent] = useState(3);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Role",
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (text) => <a>{text ?'Admin':'User'}</a>
    }
  ];


const {data:{data}}=useFetch(GET_USERS);


  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination current={current} onChange={onChange} total={100} />{" "}
    </div>
  );
};

export default Users;
