import React, { Fragment, useState, useEffect, useContext } from "react";
import clasess from "./Data.module.scss";
import DropDownMenu from "../CustomComponents/DropDownMenu";
import Context from "../Context/DataContext";

const StatusItem = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [changeStatusJobOnUI, setchangeStatusJobOnUI] = useState("");
  const colorContext = useContext(Context);

  const clickHandler = () => {
    setDropdown(true);
  };
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (changeStatusJobOnUI.length > 0) {
        const colorHandler = {
          id: props.dataSI.id,
          status: changeStatusJobOnUI,
        };
        colorContext.setColor(colorHandler);
        setDropdown(false);
      }
      setDropdown(false);
    }, 2000);

    return () => {
      clearTimeout(identifier);
    };
  }, [changeStatusJobOnUI,dropdown]);

  return (
    <Fragment>
      <p
        onClick={clickHandler}
        className={clasess[`${props.dataSI.status}`]}
      ></p>
      {dropdown && <DropDownMenu onChange={setchangeStatusJobOnUI} />}
    </Fragment>
  );
};

export default StatusItem;
