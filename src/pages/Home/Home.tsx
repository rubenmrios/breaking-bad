import { Row, Col } from "react-bootstrap";
import { ButtonLink } from "../components";
import './home.css'
const Home = () => {

  return (
    <Row>
      <Col xs={12}>
        <div className="tittle-home pding-10">
      <ButtonLink text ={"HOME_BUTTON_LINK"}/>
        </div>
      </Col>
    </Row>
  );
};

export { Home };

