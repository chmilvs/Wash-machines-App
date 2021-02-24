import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import {
  fetchChangeStateAC,
  fetchDeleteInstanceAC,
} from "../../redux/ActionCreators/modelsAC";
import style from "./InstancesModel.module.css";

function InstancesModel({ instance, id }) {
  const serialNumber = instance._id.slice(1, 12);
  const dispatch = useDispatch();
  const delInstance = (_id) => {
    dispatch(fetchDeleteInstanceAC({ id, _id }));
  };
  const changeState = (_id) => {
    dispatch(fetchChangeStateAC({ id, _id }));
  };
  return (
    <div className={style.instanceContainer}>
      <div className={style.instance}>
        <div>Prod.No.: {serialNumber}</div>
        <div className={style.panel}>
          <div className={style.bay}></div>
          {instance.isTurnedOn ? (
            <Button
              onClick={() => changeState(instance._id)}
              variant="success"
              className={style.btn}
            ></Button>
          ) : (
            <Button
              onClick={() => changeState(instance._id)}
              variant="danger"
              className={style.btn}
            ></Button>
          )}
        </div>
        <div className={style.drum}></div>
      </div>
      <Button
        onClick={() => delInstance(instance._id)}
        className={style.deleteBtn}
        variant="danger"
      >
        Delete
      </Button>
    </div>
  );
}

export default InstancesModel;
