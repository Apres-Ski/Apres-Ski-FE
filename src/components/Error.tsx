import { Link } from 'react-router-dom'

export const Error = () => {

  return (
    <div>
      <h2>Error Component (General)</h2>
      <p>There seems to be a problem loading this content. Please return to the Main page</p>
      <Link to='/'>
        <button>Go Back</button>  
      </Link>
    </div>
  )
}

// Route button to Main page