// reusable card component
const GroceryItem = ({mrp,id,discount,imgURL,sellingPrice,title}) => {
 
  return <>
      <img src= {imgURL} alt="" />
      <p>{title}</p>
      <p>{mrp}</p>
      <p>{discount}</p>
      <p>{sellingPrice}</p>
      <p>{id}</p>
     
  
  </>;
};
export default GroceryItem;
