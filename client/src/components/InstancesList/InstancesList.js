import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InstancesModel from "../InstancesModel/InstancesModel";
import { Link } from "react-router-dom";
import { fetchAddInstanceAC } from "../../redux/ActionCreators/modelsAC";
import style from "./InstancesList.module.css";

function InstancesList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.models);
  const model = state.find((model) => model._id == id);
  const addInstance = (_id) => {
    dispatch(fetchAddInstanceAC({ _id }));
  };

  return (
    <div className={style.container}>
      {model && (
        <>
          <p>Model: {model.model}</p>
          <p>Quantity: {model.instances.length}</p>
          <Button onClick={() => addInstance(model._id)} variant="primary">
            Add one more
          </Button>
          <Link to="/">Back</Link>
          <div className={style.listContainer}>
            {model.instances &&
              model.instances.map((instance) => (
                <InstancesModel
                  key={instance._id}
                  instance={instance}
                  id={id}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default InstancesList;
