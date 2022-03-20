import { Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonRefreshQuote } from "../../components";

 interface IQuote {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}

interface IQuotes {
  quote: IQuote[];
  resfresQuote: ()=>void;
}

const Quote: React.FC<IQuotes>  = ({ quote, resfresQuote }) => {
  const { t } = useTranslation();

  return (
    <>
   {quote[0] && (
        <Col xs={12}  md={6} key={quote[0].quote_id} className="df mt-2">
          <Card
            style={{ width: "18rem" }}
            className="card-quote-detail mb-3 card shadow-sm border-0 rounded"
          >
            <Card.Body className="">
              <Card.Title>{t("BUTTON_QUOTE_AUTHOR")} {quote[0].author}</Card.Title>
              <Card.Text>{t("BUTTON_QUOTE_QUOTE")} {quote[0].quote}</Card.Text>
              <ButtonRefreshQuote resfresQuote={resfresQuote} ></ButtonRefreshQuote>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export { Quote };