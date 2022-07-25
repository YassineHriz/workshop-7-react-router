import React , {useState} from 'react'
import CardComponent from './CardComponent'
import Form from 'react-bootstrap/Form';
const ListOfMovie = ({list}) => {
    const listStyle = {
        display: "flex",
        flexDirection:'column',
    }
    const [search,setSearch] = useState("")
    const searchHandler = (e) =>
    {
        setSearch(e.target.value)
        console.log(search)
    }
  return (
    <div style={listStyle}>
        <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{
                        width:'500px',
                        margin:'1vh',
                        marginLeft:'5vh'
                    }}
                    onChange={searchHandler}
                  />

        <div style={{
            display:'flex',
            justifyContent: "space-around",
            margin: "auto",
            flexWrap: "wrap",
            paddingTop: "100px"
            }}>
        {
            list.filter(el =>
                    el.title.includes(search)
                ).map((elt,index)=>
            <CardComponent
            title={elt.title}
            description={elt.decription}
            img={elt.poster}
            key={index}
            id={elt.id}
            />
            )
        }
        </div>
    </div>
  )
}

export default ListOfMovie