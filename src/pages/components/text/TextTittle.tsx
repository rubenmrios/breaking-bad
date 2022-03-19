import { useTranslation } from "react-i18next";

interface IText {
    text: string;
 }
 
const Tittle = ({text}:IText) => {
    const { t } = useTranslation();
  return (
      <>
  <h1> {t(text)}</h1>
                  </>
  );
};

export  {Tittle} ;
