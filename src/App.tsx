import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {

  return (  
   <Container fluid>
      <BrowserRouter>
      <Router />
    </BrowserRouter>
   </Container>
      
  );
}

export default App;
