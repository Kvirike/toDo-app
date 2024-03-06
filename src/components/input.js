import { Button } from 'react-bootstrap';
import remove from '../media/remove.png'
import done from '../media/done.png'
import { useEffect, useState} from 'react';


function Input() {
    const[inpVal, setInptVal] = useState('')
    const[currentVal, updtVal] = useState([])


    const handleChange = (event) => {
      setInptVal(event.target.value);
    };

    function submitChange(event) {
      event.preventDefault();
      
      if (inpVal.trim() === '') {
        return;
      }

      updtVal([...currentVal, inpVal]);
      setInptVal('');
      
    }

    return(
        <div className='bodyDiv'>
          <form className='form' onSubmit={submitChange}>
            <input
              className='inp'
              value={inpVal}
              onChange={handleChange}
            ></input>
            <Button className='d-flex justify-content-center align-items-center addBtn' type="submit">Add</Button>
          </form>
          <ul>
              {currentVal.map((elem, index) => {
                return <li key={index}>
                          <span className='task-name'>{elem}</span>
                          <img className='taskBtns' src={remove} alt='Delete'></img>
                          <img className='taskBtns' src={done} alt='Add'></img>
                        </li>
                })
              } 
          </ul>
        </div>
    )
}

export default Input