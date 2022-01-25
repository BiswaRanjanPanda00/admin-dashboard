import React , { useState } from 'react';
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { AiFillDelete } from 'react-icons/ai'
import { productRows } from '../../Dummydata';
import { Link } from 'react-router-dom'

const ProductList = () => {

    const [data , Setdata] = useState(productRows)
  
    const handleDelete = (id) => {
      Setdata(data.filter((item) => item.id !== id))
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'productName', headerName: 'Product Name', width: 200 , renderCell : (params) => {
        return(
            <div className="product-list-item">
                <img className='product-list-image' src={params.row.avatar} alt="" />
                {params.row.productName}
            </div>
        )
      } },
      {field: 'stock' , headerName: 'Stock' , width: 150},
      {field: 'status' , headerName: 'Status' , width: 150},
      {field: 'action' , headerName: 'Action' , width: 150 , renderCell : (params) => {
        return(
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='product-list-edit'>Edit</button>
            </Link>
            <AiFillDelete size={18} color='red' className='product-list-icon-delete' onClick={() => handleDelete(params.row.id)}/>
  
          </>
        )
      } },
    ];
  

  return (
    <div className='product-list'>
        <DataGrid
          disableSelectionOnClick
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
    </div>
  )
};

export default ProductList;
