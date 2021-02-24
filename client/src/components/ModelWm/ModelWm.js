import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { fetchDeleteModelAC } from "../../redux/ActionCreators/modelsAC";
import { Link } from "react-router-dom";
import style from "./ModelWm.module.css";

function ModelWm({ model }) {
  const dispatch = useDispatch();

  const deleteModel = (_id) => {
    dispatch(fetchDeleteModelAC({ _id }));
  };

  return (
    <div className={style.modelContainer}>
      <div className={style.model}>
        <Link to={`${model._id}`}>{model.model}</Link>
        <div className={style.panel}>
          <div className={style.bay}></div>
          <div className={style.btn}></div>
        </div>
        <div className={style.drum}></div>
      </div>
      <Button
        onClick={() => deleteModel(model._id)}
        className={style.deleteBtn}
        variant="danger"
      >
        Delete
      </Button>
    </div>
  );
}

export default ModelWm;
