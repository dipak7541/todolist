import { useScrollTrigger } from '@material-ui/core';
import React, { useState } from 'react'
import notes from '../Images/notes.png'


const ToDo = () => {
    const [inputData, setInputData] = useState('');
    const [toogleSubmit, settoogleSubmit] = useState(true);
    const [items, setItems] = useState([]);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert("Plz Fill Data")
        } else if (inputData && !toogleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            settoogleSubmit(true);
            setInputData("")
            setIsEditItem(null);
        }
        else {
            const AllInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, AllInputData])
            setInputData('');
        }

    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((value) => {
            return value.id !== index;
        })
        setItems(updatedItems);
    }
    const deleteAll = () => {
        setItems([]);
    }
    const editItem = (index) => {
        let newEditItem = items.find((elem) => {
            return elem.id === index;
        })
        settoogleSubmit(false);
        setInputData(newEditItem.name)
        setIsEditItem(index);
    }


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={notes} alt="todoLogo" />
                        <figcaption>Add your list Here ✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️  Add Items..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        {
                            toogleSubmit ? <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i> : <i className="far fa-edit add-btn" title="Edit Items" onClick={addItem} ></i>
                        }
                    </div>

                    <div className="showItems">

                        {items.map((val) => {
                            return (
                                <div className="eachItem" key={val.id}>
                                    <h3>{val.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" title="Edit Items" onClick={() => editItem(val.id)}></i>
                                        <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() => deleteItem(val.id)}></i>
                                    </div>

                                </div>
                            )
                        })}


                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={deleteAll}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo
