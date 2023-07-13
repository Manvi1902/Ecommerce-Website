import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//import "../cssfiles/product.css";
import productData  from '../JSONProductData/productData';
//{id,img,title,category,price} destructuring of array

const ProductItems= (productItem,addToCart)=>{  

 return( 

  <div className='pro-card' key={productItem.id} >
    <Row  xs={1} md={3} className="g-4 rowcard" >
      {Array.from({ length:3 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='custom-card'>
            { 
              productItem.img &&(
              <Card.Img 
                  variant="top" 
                  src={productItem.img}  
                  alt="Product Image"
                  style={{ width: "350px", height: "170px" }}
              />
            )}
              <Card.Body>
                <Card.Title>{productItem.title}</Card.Title>
                <Card.Text>
                    <div>{productItem.category}</div>
                    <div>Rs.{productItem.price}</div>
                </Card.Text>    
              </Card.Body>
              <Button  
              className="addcartbtn" 
              variant="secondary" 
              size="lg"
              onClick={()=>addToCart(productItem)}
              >
                   Add to card
              </Button>
          </Card>
        </Col>
        ))}
    </Row>
  </div>
);
}


const ProductLists=()=>{
return (
<>
  { productData.map(ProductItems)}
</>
);}



export default ProductLists;