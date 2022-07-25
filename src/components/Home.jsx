import React from 'react';
import ListOfMovie from './ListOfMovie';
import AddMovie from './AddMovie'

function Home({list,AddNewMovie}) {
  return (
    <div>
        <ListOfMovie list={list}/> 
        <AddMovie AddNewMovie={AddNewMovie}/>
    </div>
  )
}

export default Home