import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IUser } from "../../../redux/models";

import "./Card.css";

interface IUserCard {
    user: IUser;
 }
const CardUser = ({user}:IUserCard, index:number) => {

  return (
    <>
     <Link to={`/user/${user.char_id}`}>
      <Card className="profile-card">
        <Card.Img
          className="img img-responsive"
          src={user.img}
        />
        <Card.Title className="profile-name">{user.name}</Card.Title>
        <Card.Text className="profile-username">{user.category}</Card.Text>
        <Card.Text className="profile-username">{user.category}</Card.Text>
        <Button className="profile-button">Ver Detalle</Button>
      </Card>
      </Link>
    </>
  );
};

export { CardUser };
