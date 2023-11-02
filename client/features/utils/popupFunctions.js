import { setCurrentId, setShowNewMat, setShowOverlay } from "./flagSlice";
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

export const singleMatPopup = (id) => {
  dispatch(setCurrentId(id));
  dispatch(setShowOverlay(true));
  dispatch(setShowSingleMat(true));
};
