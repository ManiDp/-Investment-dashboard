import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './Components/Summary/Summary';
import LatestNews from './Components/LatestNews/LatestNews';
import Strategy from './Components/Strategy/Strategy';
import Bobfarms from './Components/BobFarms/Bobfarms';
import { Row,Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Summary/>
        <Row>
          <Col xs={8}>
            <Strategy/>
          </Col>
          <Col xs={4}>
            <LatestNews/>
          </Col>
        </Row>
        <Bobfarms/>
      </header>
    </div>
  );
}

export default App;
