import Button from "./addButton";

export default function ListData(props) {
  return (
    <>
      {props.data?.map((listdata, key) => {
        return (
          <div key={key}>
            {listdata.name}
            <Button
              name={"Edituser"}
              onClick={() => props.handleEditClick(listdata.id)}
            />
            <button onClick={() => props.HandleDelete(listdata.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
