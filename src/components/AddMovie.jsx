import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
const AddMovie = ({AddNewMovie}) => {
    const[newMovie , setNewMovie] = useState({"title":'',"poster":''})
    const handleChange = (e) =>
    {
        setNewMovie({...newMovie,[e.target.id]:e.target.value})
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setNewMovie({"title":'',"poster":''})
        AddNewMovie(newMovie)
        console.log(newMovie)
    }
    
  return (
    <div style={{width:'500px' , textAlign:'center' , padding:'1vh'}}>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" id='title' onChange={handleChange} value={newMovie.title}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image Url" id='poster' onChange={handleChange} value={newMovie.poster}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add Movie !
      </Button>
    </Form>
    </div>
  )
}

export default AddMovie