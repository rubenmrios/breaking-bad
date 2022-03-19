import {  Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './buttons.css';
const ButtonRefreshQuote = ( {resfresQuote} ) => {

    const { t } = useTranslation();

  return <Button className="buttonRefresh" onClick={resfresQuote} >{t("BUTTON_QUOTE_NAME")}</Button>;

};

export { ButtonRefreshQuote };
