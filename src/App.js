// import React from 'react';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbo from './components/jumbotron';
import Container from 'react-bootstrap/Container';
import Naav from './components/navbar';

import India from './components/india';
import Usa from './components/usa';
import China from './components/china';
import Search from './components/search';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'




function App() {
  return (
    <Router>
      <div>
        <div>
          <Naav />
        </div>


        <h1> </h1>
        <h1> </h1>
        <h1> </h1>




        <Container>

          <Route path="/" exact component={Jumbo} />
          <Route path="/india" exact component={India} />
          <Route path="/usa" component={Usa} />
          <Route path="/china" component={China} />
          <Route path="/search" component={Search} />


        </Container>


        <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand >Saharsh Rathi</Navbar.Brand>
            <Nav.Link href="https://github.com/Saharsh-R/corona-tracker">Code</Nav.Link>
          </Container>
        </Navbar>
      </div>
    </Router>

  )
}



export default App;
