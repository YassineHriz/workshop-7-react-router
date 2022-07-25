import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
const Trailer = ({list}) => {
    const modalStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    const {id}=useParams()
    const findMovie = list.find(el => el.id === id)
    console.log( 'hhhhhhhhhhhhh',`https://www.youtube.com/${findMovie.trailer}`)
       
    console.log(findMovie)
  return (
    <Modal.Dialog style={{modalStyle}}>
      <Modal.Header closeButton>
        <Modal.Title>{findMovie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe width="560" height="315" src={`https://www.youtube.com/${findMovie.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"><Link to="/" style={{textDecoration:"none",color:'white'}}>Close</Link></Button>
      </Modal.Footer>
       
    </Modal.Dialog>
  )
}

export default Trailer