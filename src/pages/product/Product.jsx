import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../Dummydata';
import { MdUpload } from 'react-icons/md'

const Product = () => {
  return (
    <div className='product'>
        <div className="product-title-container">
            <h2 className="product-title">Product</h2>
            <Link to='/newproduct'>
                <button className="product-add-button">Create</button>
            </Link>
        </div>
        <div className="product-top">
            <div className="product-top-left">
                <Chart data={productData} dataKey='Sales' title='Sales Performance' />
            </div>
            <div className="product-top-right">
                <div className="product-info-top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrry2FW2T8zsFp1dfFRJhHPVLU__f5HWk1M4tCx8rQUrcZ1Ai7YegvTRUoA5PRRmmE6JQ&usqp=CAU" alt="" className="product-info-img" />
                    <span className="product-name">Realme Earphones</span>
                </div>
                <div className="product-info-bottom">
                    <div className="product-info-item">
                        <span className="product-info-key">id:</span>
                        <span className="product-info-value">123</span>
                    </div>

                    <div className="product-info-item">
                        <span className="product-info-key">sales:</span>
                        <span className="product-info-value">3000</span>
                    </div>

                    <div className="product-info-item">
                        <span className="product-info-key">active:</span>
                        <span className="product-info-value">yes</span>
                    </div>

                    <div className="product-info-item">
                        <span className="product-info-key">in stock:</span>
                        <span className="product-info-value">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-bottom">
            <form className="product-form">
                <div className="product-form-left">
                    <label>Product Name</label>
                    <input type="text" placeholder='Realme Earphones' />

                    <label>In Stock</label>
                    <select name="instock" id="instock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="product-form-right">
                    <div className="product-upload">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrry2FW2T8zsFp1dfFRJhHPVLU__f5HWk1M4tCx8rQUrcZ1Ai7YegvTRUoA5PRRmmE6JQ&usqp=CAU" alt="" className="product-upload-img" />
                        <label htmlFor="file"><MdUpload size={24} className='product-update-icon'/></label>
                        <input type="file" id="file" style={{display: 'none'}} />
                    </div>
                    <button className="product-button">Update</button>
                </div>
            </form>
        </div>
    </div>
    )
};

export default Product;
