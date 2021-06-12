import React,{useState} from 'react'
import notes from '../Images/notes.png'


const ToDo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] =useState([])
    const addItem =()=>{
        if(!inputData){
            
        }else{
            setItems([...items,inputData])
            setInputData('');
        }
    
    }
    const deleteItem =(id) =>{
        const updatedItems=items.filter((value,ind)=>{
            return ind!==id;
        })
        setItems(updatedItems);
    }
    const deleteAll =() =>{
        setItems([]);
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
                    <input type="text" placeholder="✍️  Add Items..." value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                    <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i>
                </div>

                <div className="showItems">
                   
                        {items.map((val,index)=>{
                            return (
                                <div className="eachItem">
                                <h3>{val}</h3>
                                <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={()=>deleteItem(index)}></i>
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
