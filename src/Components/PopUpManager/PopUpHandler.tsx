import { useEffect } from "react";
import { useSelector } from "react-redux";
import Helper from "../Helper/Helper";
import Form from "../AddNewForm/AddForm";
import { RootState } from "../../State/store";
import EditForm from "../EditForm/EditForm";
import {
  mainHelperData,
  AddHelperData,
  EditHelperData,
} from "../Helper/mainHelperData";

const ShowPopupManager = () => {
  const popupHandler = useSelector((state: RootState) => state.popup.popup);
  const data = useSelector((state: RootState) => state.data);
  let manager: JSX.Element;
  useEffect(() => {
    if (popupHandler.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  if (popupHandler === "helper") {
    manager = <Helper helperData={mainHelperData} />;
  }
  if (popupHandler === "addNew") {
    manager = <Form />;
  }
  if (popupHandler === "editJob") {
    const validObject = data.currentPost.filter(
      (object) => object.id === data.editID
    );
    manager = <EditForm object={validObject[0]} />;
  }
  if (popupHandler === "helperADD") {
    manager = <Helper helperData={AddHelperData} />;
  }
  if (popupHandler === "helperEDIT") {
    manager = <Helper helperData={EditHelperData} />;
  }
  return <div>{manager}</div>;
};
export default ShowPopupManager;
