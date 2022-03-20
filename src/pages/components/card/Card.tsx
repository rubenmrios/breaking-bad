import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { IUser } from "../../../redux/models";

import "./Card.css";

interface IUserCard {
    user: IUser;
 }
const CardUser = ({user}:IUserCard, index:number) => {
  const { t } = useTranslation();

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
        <Button className="profile-button">{t("BUTTON_CARD_DETAIL")}</Button>
      </Card>
      </Link>
    </>
  );
};

export { CardUser };
