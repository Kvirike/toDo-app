import Date from '../components/date'
import oldTasks from '../media/old.png'


function Header() {
    return(
        <div className='headerDiv'>
          <div><img className='oldTasks' src={oldTasks}></img> </div>
          <Date/>
        </div>
    )
}
export default Header