import { Fragment } from "react";

export default function Addbutton(props) {
  return (
    <Fragment>
      <button onClick={props.onClick}>{props.name}</button>
    </Fragment>
  );
}
