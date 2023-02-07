import React from 'react'
import { ProductListing } from '../containers/ProductListing'
import Card from 'react-bootstrap/Card';
import { Product } from './Product';

export const Home = () => {
  return (
    <div>
       
        <Card className="bg-dark text-white">
            <Card.Img src="D:/practics/react/redux-app/src/assets/banner.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
         {/* <ProductListing/> */}
        
    </div>
  )
}
