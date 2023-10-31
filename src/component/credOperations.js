import { Fragment, useState } from "react";
//import useCustomApi from "./customHooks";
import Input from "../component/input";
import Button from "./addButton";
import { Users } from "./data";
import Listdata from "./listData";
import { v4 as uuidv4 } from "uuid";
export default function Cred() {
  // const userApi = "https://jsonplaceholder.typicode.com/users";

  const [name, setName] = useState("");

  const [id, setId] = useState();
  //const { data } = useCustomApi(userApi);
  const [apidata, setapidata] = useState(Users);
  /*   useEffect(() => {
    setapidata(Users);
  }, [Users]); */
  const handleAddClick = () => {
    const copyofApidata = [...apidata];
    if (id) {
      copyofApidata[HandleIndex(id)].name = name;
      setapidata(copyofApidata);
      setName("");
      setId();
    } else {
      if (name !== "") {
        copyofApidata.unshift({ id: uuidv4(), name: name });
      }
      setapidata(copyofApidata);
    }
  };

  const UpdatedCopy = () => {
    const editData = [...apidata];
    return editData;
  };
  const FilterLogic = (id) => {
    const filterdata = UpdatedCopy().find((element) => element.id === id);
    return filterdata;
  };

  const HandleIndex = (id) => {
    const EditDataupdate = UpdatedCopy().findIndex((data) => data.id === id);
    return EditDataupdate;
  };
  const handleEditClick = (id) => {
    setId(id);
    let editID = FilterLogic(id);
    setName(editID.name);
  };

  const HandleDelete = (id) => {
    const editData = [...apidata];
    editData.splice(HandleIndex(id), 1);
    setapidata(editData);
    setName("");
    setId();
  };
  return (
    <Fragment>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <Button name={id ? "updateuser" : "Adduser"} onClick={handleAddClick} />
      </div>
      <Listdata
        data={apidata}
        handleEditClick={handleEditClick}
        HandleDelete={HandleDelete}
      />
    </Fragment>
  );
}
