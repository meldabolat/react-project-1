import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <ProductList />

    </>
  )}
  const Header =()=>{
    return (
    <> 
    <h1>Header Component</h1>
    
    </> 
    )
  }
  const ProductList = () => {
    return (
      <><h2>Product list </h2>
      <Product />
      <Product />
      <Product />

      </>
      
    )
  }
  const Product = () => {
    return(
      <h2>Product</h2>
    )
  }


export default App