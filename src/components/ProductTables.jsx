import React from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductTables = () => {

    const [search,setSearch] = useState([""]);
    const [productes,setProductes] = useState([]);
    const [filteredProductes,setFilteredProductes] = useState([]);

    const getProductes = async () => {
        try{
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProductes(response.data)
        setFilteredProductes(response.data);
        } catch(error){
        console.log(error)
        }
    }
   
  const columns = [
    {
      name : "Product Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name : "Price",
      selector: (row) => row.price,
    },
    {
      name : "Categary",
      selector: (row) => row.category,
      cell: row => row.category.name,
    },
    {
      name : "photo",
      selector: (row) => row.images,
      cell: row => <img height="84px" width="56px" alt={row.name} src={row.images} />,
    },
    {
        name : "Action",
        cell : (row) => (
           <div className='d-flex gap-2'>
                 <button className='btn btn-primary' onClick={() => alert(row.id)}>Edit</button>
                <button className='btn btn-primary' onClick={() => alert(row.id)}>Delete</button>
           </div>
        ),
    },  
  ];
  useEffect(() => {
      getProductes();
  },[]);

  useEffect(() => {
        const result = productes.filter((product) =>{
            return product.title.toLowerCase().match(search.toLowerCase());
        });
        setFilteredProductes(result);
  },[search]);
  return (
    <DataTable  
    title="Product List" 
    columns={columns} 
    data={filteredProductes}
    pagination
    fixedHeader
    fixedHeaderScrollHeight='520px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    actions = {<button className='btn btn-sm btn-info'> Export</button>}
    subHeader
    subHeaderComponent = {
        <input type='text'
         placeholder='search herem '
         className='w-25 form-control'
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
    }

    />
  )
}

export default ProductTables