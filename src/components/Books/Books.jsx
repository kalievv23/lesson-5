import React, { useState } from 'react'
import BooksRender from './BooksRender'
import styled from 'styled-components'
import BooksForma from './BooksForma'

const Container = styled.div`
    width: 700px;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 20px white;
    & header{
        padding: 15px;
        font-weight: bold;
        background-color: #e6e6e6;
    }
    & span {
        font-size: 20px;
        cursor: pointer;
    }
    & span:hover {
        color: #7a7a7a;
    }
`
const Books = () => {

    const books = [
        {
            id: "1",
            name: "Aktosh",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
            price: "1400$",
            data: new Date(),
            color: "blue"
        },
        
    ]

    const [openModal, setOpenModal] = useState(true)                          /////////////////////////////////

    const [state, setState] = useState(books)

    function saveBook(newBook) {
        setState((arr) => [...arr, newBook])
    }

    function bookDelete(id) {
        const newState = state.filter((el) => {
            if (el.id !== id) {
                return el
            }
        })
        setState(newState)
    }

  return (
    <Container className='container'>
        <header>
            <span onClick={() => setOpenModal(true)}>ADD BOOK</span>
            {openModal && <BooksForma closeModal = {setOpenModal} onSaveBook = {saveBook}/>}
        </header>
        <h1>BOOKS</h1>
        {state.map((el) => {
            return <BooksRender onDelete = {bookDelete} key = {el.id} id = {el.id} name = {el.name} img = {el.img} price = {el.price} data = {el.data} color = {el.color}/>
        })}
    </Container>
  )
}

export default Books