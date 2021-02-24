import { useSelector } from "react-redux";
import ModelWm from "../ModelWm/ModelWm";
import NewWM from "../NewWM/NewWM";
import style from "./ModelList.module.css";

function ModelsList() {
  const models = useSelector((state) => state.models);

  return (
    <div className={style.listContainer}>
      <NewWM />
      <div className={style.list}>
        {models &&
          models.map((model) => <ModelWm key={model._id} model={model} />)}
      </div>
    </div>
  );
}

export default ModelsList;
