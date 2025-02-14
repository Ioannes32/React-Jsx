import React from 'react';

function App() {
  return (
    <div className="container-fluid text-center" style={{ paddingBottom: '50px' }}>
      <div className="row">

        {/* Image and Name Section */}
        <div className="col-md-6 order-1">
          <img
            src="/src/assets/my.jpg"
            alt="John"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '200px', height: '200px' }}
          />
          <h2>Aloro, John Stephen</h2>
          <p className="text-muted">Computer Science Student</p>
        </div>

        {/*Introduction Section */}
        <div className="col-md-6 order-2 order-md-3 text-center">
          <hr className="d-block d-md-none"/>
          <p className="lead" style={{ marginTop: '8%'}}>
            Welcome to my Porfolio
          </p>
          <h1 style={{ marginTop: '10%'}}>Hello, I'm Aloro, John Stephen</h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            A passionate Computer Science Student with a love about technology, Computers, etc. Even though I'm lazy.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="row mt-5">
        <div className="col">
          <h2>Skills</h2>
          <ul className="list-group fw-medium" style={{margin: '0 35%', marginTop: '3%', fontSize: '14px'}}>
            <li className="list-group-item text-primary">C</li>
            <li className="list-group-item text-success">CSS</li>
            <li className="list-group-item text-success">HTML</li>
            <li className="list-group-item  text-danger">React</li>
            <li className="list-group-item text-warning">BootStrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;