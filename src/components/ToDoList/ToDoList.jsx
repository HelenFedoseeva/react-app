import { useState } from 'react';
import '../../index.css';

export const ToDoList = ({ value, click }) => { 
    const [noteArr, setArray] = useState(['Hit the gym', 'Pay bills', 'Buy pizza','Organize the Trello for tomorrow'])
    

    const listValue = String(value.trim())

    if (click > 1 && listValue !== '') {
        noteArr.push(listValue) 
  
    } 
    
    const markupList = noteArr.map((elem, index) =>{return (<li onClick={handleListItemClick} key={index} className='list__item'>{elem}
      <button onClick={handleCloseBtnClick} className='closeBtn' type='button'>×</button></li>)
  })
 
    
    function handleCloseBtnClick(e) {
     

        const index = e.nativeEvent.target.offsetParent
        console.log(index)
        const siblingIndex = e.nativeEvent.target.offsetParent.nextSibling
        noteArr.splice(index, 1)
        console.log(noteArr)
        setArray([...noteArr])
        // console.log(noteArr)
    }
    
    function handleListItemClick(e) {
        if (e.target.classList.contains('checked')) {
            e.target.classList.remove('checked')
        
            return
        }
        e.target.classList.add('checked')
    }

    return (
        <ul className='list'>
           { markupList}
        </ul>
    )
}