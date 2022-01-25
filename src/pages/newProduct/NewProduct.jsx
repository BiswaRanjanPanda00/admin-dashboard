import React from 'react';
import './newproduct.css'

const NewProduct = () => {
  return (
    <div className='new-product'>
        <h2 className="new-product-title">New Product</h2>
        <form className="new-product-form">
            <div className="new-product-item">
                <label>
                    Image
                </label>
                <input type="file" id='file' />
            </div>

            <div className="new-product-item">
                <label>
                    Name
                </label>
                <input type="text" placeholder='Enter Name of Product' />
            </div>

            <div className="new-product-item">
                <label>
                    Stock
                </label>
                <input type="text" placeholder='Enter Stock Qty.' />
            </div>

            <div className="new-product-item">
                <label>
                    Active
                </label>
                <select name="active" id="active" className="new-product-select">
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>

            <button className="new-product-button">Create</button>
        </form>
    </div>
    )
};

export default NewProduct;
