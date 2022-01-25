import React , { useState } from 'react';
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { AiFillDelete } from 'react-icons/ai'
import { userRows } from '../../Dummydata';
import { Link } from 'react-router-dom'

const UserList = () => {

  const [data, Setdata] = useState(userRows)

  const handleDelete = (id) => {
    Setdata(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'User Name', width: 200 , renderCell : (params) => {
      return(
          <div className="user-list-user">
              <img className='user-list-image' src={params.row.avatar} alt="" />
              {params.row.userName}
          </div>
      )
    } },
    {field: 'email' , headerName: 'Email' , width: 200},
    {field: 'status' , headerName: 'Status' , width: 150},
    {field: 'transaction' , headerName: 'Transaction' , width: 150},
    {field: 'action' , headerName: 'Action' , width: 150 , renderCell : (params) => {
      return(
        <>
          <Link to={'/user/' + params.row.id}>
            <button className='user-list-edit'>Edit</button>
          </Link>
          <AiFillDelete size={18} color='red' className='user-list-icon-delete' onClick={() => handleDelete(params.row.id)}/>

        </>
      )
    } },
  ];


  return (
    <div className='user-list'>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          disableSelectionOnClick
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
    )
};

export default UserList;
