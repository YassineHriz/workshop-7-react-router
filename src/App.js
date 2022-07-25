import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie'
import ListOfMovie from './components/ListOfMovie';
import Trailer from './components/Trailer';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [list, setList] = useState([
    {
      id: "1",
      title: "The Conjuring",
      poster: "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg",
      decription:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      rate: 2,
      trailer: "watch?v=McOmzgX09wo&ab_channel=WarnerBros.France"
    },
    {
      id: "2",
      title: "The Grudge",
      poster:
        "https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: 3,
      trailer: "watch?v=O2NKzO-fxwQ&ab_channel=SonyPicturesEntertainment"
    },
    {
      id: "3",
      title: "The Ring",
      poster: "https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: 1,
      trailer: "watch?v=uukQ_6szDm8&ab_channel=ParamountPicturesInternational"
    },
    {
      id: "4",
      title: "The Shawshank Redemption",
      poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: 3,
      trailer: "watch?v=NmzuHjWmXOc&ab_channel=RottenTomatoesClassicTrailers"
    },
    {
      id: "5",
      title: "The Godfather",
      poster:
        "https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: 3,
      trailer: "watch?v=UaVTIH8mujA&ab_channel=ParamountPictures"
    },


  ]);
  const AddNewMovie = (film) => {
    setList([...list, film]);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home list={list} AddNewMovie={AddNewMovie}/>} />
        <Route path="/movie/:id" element={<Trailer list={list} />} />
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App;
