import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { fetchUsersRequest } from "../../redux/actions/userActions";
import { RootState } from "../../redux/reducers/rootReducer";
import { Tittle,CardUser } from "../components";
import { IUser } from "../../redux/models";

const Users = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);


  return (
    <Row className="">
      <Col xs={12}>
        <div className="tittle pding-10">
          <Tittle text ={"USER_TITLE"}/>
        </div>
      </Col>

       {pending ? (
        <Col  className="loading">
          <div className="loader"></div>
        </Col>
      ) : error ? (
        <div>Error al cargar la aplicación</div>
      ) : (
        <>
        {users &&
          (users as IUser[]).map((user:IUser, index:number) => (
            <Col md={4} >
            <CardUser user={user} />
        </Col>
            ))}
            </>
      )}
    </Row>
  );
};

export { Users };

