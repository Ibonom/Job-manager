import HelpButton from "./Help";
import { useDispatch } from "react-redux";
import { popupSetup } from "../../State/Reducers/PopUpManager";

const HelperHandler = () => {
  const dispatch = useDispatch();
  //off because work in progress
  return <HelpButton onClick={() => dispatch(popupSetup(""))} />;
};

export default HelperHandler;
