import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Row,Col } from "react-bootstrap";
import { fetchUserDetailRequest,fetchUserQuoteRequest } from "../../redux/actions/userActions";
import { RootState } from "../../redux/reducers/rootReducer";
import {Quote,UserInformation,ButtonRefreshQuote,Tittle } from "../components";


const UserDetail = () => {
  const dispatch = useDispatch();
  const {  user,quote } = useSelector(
    (state: RootState) => state.users
  );
  const { id } = useParams() ;

  useEffect(() => {
    dispatch(fetchUserDetailRequest(id));
  }, [dispatch,id]);

  const resfresQuote = () =>{
    dispatch(fetchUserQuoteRequest(user[0]));
  }
  return (
    <Row>
       <Col xs={12}>
        <div className="tittle pding-10">
          <Tittle text ={"USER__DETAIL_TITLE"}/>
        </div>
      </Col>
        <UserInformation user={user[0]} />

        {!quote[0] ? (
        <Col>
          <ButtonRefreshQuote resfresQuote={resfresQuote}></ButtonRefreshQuote>

          </Col>
        ):(

        <Quote quote={quote} resfresQuote={resfresQuote}/>
        )}
       
    </Row>
  );
};

export { UserDetail };
