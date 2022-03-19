import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface IText {
  text: string;
}

const ButtonLink = ({ text }: IText) => {
  const { t } = useTranslation();

  return <Link to="/users">{t(text)}</Link>;
};

export { ButtonLink };
