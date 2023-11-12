import { Link } from 'react-router-dom'

function Navigacija() {
    return (
        <div className='navigacija'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
        </div>
    )
}

export default Navigacija;