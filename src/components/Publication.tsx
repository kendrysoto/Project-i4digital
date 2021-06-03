import React, { ReactElement, useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetcPublication } from "../redux/AsyncActions";
import "../style/style.css";
import { Form, Col } from "react-bootstrap";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormFeedback,
  Input,
} from "reactstrap";

interface PublicationProps {
  publication?: any;
  DataPublication?: any;
  fetcPublication?: any;
  names?: any;
}

const Publication = ({
  DataPublication,
  fetcPublication,
}: PublicationProps): ReactElement => {
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidBody, setInvalidBody] = useState(false);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function addPublication() {
    if (form.name === "") {
      setInvalidName(true);
      setMessageName("invalid name");
    } else if (form.email === "") {
      setInvalidEmail(true);
      setMessageEmail("invalid email");
    } else if (form.body === "") {
      setInvalidBody(true);
      setMessageBody("you must add a post");
    } else {
      let valornuevo = form;
      let list = DataPublication;
      list.push(valornuevo);
      setForm(list);
      setModal(false);
    }
  }

  useEffect(() => {
    fetcPublication();
  }, []);

  return (
    <div>
      <button
        id="create"
        type="button"
        className="btn btn-primary"
        onClick={() => openModal()}
      >
        Create New Publication
      </button>
      <section id="seccion3" className="fila">
        {DataPublication &&
          DataPublication.map((albumL: any) => (
            <div
              id="publication"
              key={albumL.id}
              className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            >
              <div>
                <h2>{albumL.name}</h2>
                <p>{albumL.email}</p>
                <p>{albumL.body}</p>
              </div>
            </div>
          ))}
      </section>
      <Modal id="modal" isOpen={modal}>
        <ModalHeader>
          <div>
            <h3>Create New Publication</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <Form>
            <Form.Row>
              <Col>
                <Input
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  invalid={invalidName}
                />
                <FormFeedback>{messageName}</FormFeedback>
                <br />
                <Input
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  invalid={invalidEmail}
                />
                <FormFeedback>{messageEmail}</FormFeedback>
                <br />
                <Input
                  placeholder="body"
                  name="body"
                  onChange={handleChange}
                  value={form.body}
                  invalid={invalidBody}
                />
                <FormFeedback>{messageBody}</FormFeedback>
                <br />
              </Col>
            </Form.Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button
            data-testid="create-publication"
            type="button"
            className="btn btn-primary"
            onClick={() => addPublication()}
          >
            Accept
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStatetoProps = (state:PublicationProps) => {
  return {
    DataPublication: state.publication,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetcPublication: () => dispatch(fetcPublication()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Publication);
