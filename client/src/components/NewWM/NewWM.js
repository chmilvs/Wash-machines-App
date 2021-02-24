import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddModelAC } from "../../redux/ActionCreators/modelsAC";
import style from "./NewWm.module.css";

function NewWM() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const addModel = (event) => {
    event.preventDefault();
    const {
      model: { value: model },
    } = event.target;
    dispatch(fetchAddModelAC({ model }));
  };
  return (
    <Form onSubmit={addModel}>
      <Form.Label>Please enter new model of wash machine!</Form.Label>
      <Form.Group className={style.input} controlId="formBasicEmail">
        <Form.Control type="text" name="model" />
        {error.isError ? <Form.Label>{error.text}</Form.Label> : null}
        <Button className={style.btn} variant="outline-dark" type="submit">
          Create new model
        </Button>
      </Form.Group>
    </Form>
  );
}

export default NewWM;
