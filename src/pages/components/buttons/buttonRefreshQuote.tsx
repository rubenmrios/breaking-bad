import {  Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ButtonRefreshQuote = ( {resfresQuote} ) => {

    const { t } = useTranslation();

  return <Button onClick={resfresQuote} >{t("BUTTON_QUOTE_NAME")}</Button>;

};

export { ButtonRefreshQuote };
