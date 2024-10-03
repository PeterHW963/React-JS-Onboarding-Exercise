import React from 'react'

function Tasks() {
  return (
    <div>
      <div className="div text-center card border-dark">
        <div className="bg-dark text-light card-header">
          <h3 className="my-1">John Doe</h3>
        </div>
        <div className="card-body">
          <div className="list-group list-group-flush">
            <div className="div text-danger fw-bold list-group-item">You have 3 alerts today!</div>
            <div className="list-group-item">
              <li>Attend Mass at 9am.</li>
              <li>Submit retreat registration form by 5pm.</li>
              <li>Attend ministry meeting at 8pm.</li>
            </div>  
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Tasks