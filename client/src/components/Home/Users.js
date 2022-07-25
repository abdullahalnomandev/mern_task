import { Space, Table, Tag } from "antd";
import React  from "react";
import { GET_USERS } from "../../api/ApiConstant";
import { getData } from "../../api/commonServices";
import useSWR from "swr";
import useFetch from "../../hooks/useFetch";


const Users = () => {
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

console.log(data);

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Users;
