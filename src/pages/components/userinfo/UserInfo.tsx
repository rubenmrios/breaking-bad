import { Card, Button,Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IUser } from "../../../redux/models";

interface IUserCard {
    user: IUser;
 }
const UserInformation = ({user}:IUserCard, index:number) => {

  const { t } = useTranslation();

  return (
    <>
    {user && 
     <Col md={4}>
      <Card >
        <Card.Img
          src={user.img}
          />
        <Card.Title >{t("NAME_USER")} {user.name}</Card.Title>
        <Card.Text>{t("CATEGORY_USER")} {user.category}</Card.Text>
        <Card.Text >{t("NICK_USER")} {user.nickname}</Card.Text>
        <Card.Text >{t("BIRTHDAY_USER")} {user.birthday}</Card.Text>
        <Card.Text >{t("REAL_NAME_USER")} {user.portrayed}</Card.Text>
      </Card>
      </Col>
        }
    </>
  );
};

export { UserInformation };