import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import './buttons.css';

const ButtonLanguaje = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Button className="buttonLanguage" onClick={() => i18n.changeLanguage("en")}>
        <img src="/images/england.png" alt="" />
      </Button>
      <Button className="buttonLanguage" onClick={() => i18n.changeLanguage("es")}>
      <img src="/images/spain.png" alt="" />
      </Button>
    </>
  );
};

export { ButtonLanguaje };
