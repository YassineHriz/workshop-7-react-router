import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
const CardComponent = ({title,img,description,id}) => {
  return (
    <div>
        <Card style={{ width: '18rem' , margin:'5vh'}}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                <Button variant="primary">
                  <Link to={`/movie/${id}`} style={{textDecoration:"none",color:"white"}}>
                    Watch it Now !
                  </Link>
                  </Button>
                </Card.Body>
        </Card>
    </div>
  )
}

export default CardComponent