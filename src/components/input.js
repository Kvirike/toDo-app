import { Button } from 'react-bootstrap';
import remove from '../media/remove.png'
import done from '../media/done.png'

function Input() {
    return(
        <div className='bodyDiv'>
          <form className='form'>
            <input
              className='inp'
            ></input>
            <Button className='d-flex justify-content-center align-items-center addBtn'>Add</Button>
          </form>
          <ul>
            <li>
              <div className='task-content'>
                <span className='task-name'>Task one</span>
                <div>
                  <img className='taskBtns' src={remove} alt='Delete'></img>
                  <img className='taskBtns' src={done} alt='Add'></img>
                </div>
              </div>
            </li>
          </ul>
        </div>
    )
}

export default Input