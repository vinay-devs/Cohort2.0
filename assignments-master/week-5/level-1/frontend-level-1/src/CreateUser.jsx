import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    Name: "",
    description: "",
    Interest_1: "",
    Interest_2: "",
    Interest_3: "",
    LinkedIn: "",
    Twitter: "",
  });

  const [filled, setFilled] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
    if (
      userData.Name &&
      userData.description &&
      userData.Interest_1 &&
      userData.Interest_2 &&
      userData.Interest_3 &&
      userData.LinkedIn &&
      userData.Twitter
    ) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };
  const handleAddButton = async () => {
    const data = await axios.post(`http://localhost:5500/add`, {
      userData: userData,
    });
    console.log(data);
    return data;
  };

  return (
    <div style={style.container}>
      <input
        style={style.input}
        onChange={handleOnChange}
        type="text"
        name="Name"
        placeholder="Name"
      />
      <input
        style={style.input}
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleOnChange}
      />
      <input
        style={style.input}
        type="text"
        name="Interest_1"
        placeholder="Interest-1"
        onChange={handleOnChange}
      />
      <input
        style={style.input}
        type="text"
        name="Interest_2"
        placeholder="Interest-2"
        onChange={handleOnChange}
      />
      <input
        style={style.input}
        type="text"
        name="Interest_3"
        placeholder="Interest-3"
        onChange={handleOnChange}
      />
      <input
        style={style.input}
        type="text"
        name="LinkedIn"
        placeholder="LinkedIn Url"
        onChange={handleOnChange}
      />
      <input
        style={style.input}
        type="text"
        name="Twitter"
        placeholder="Twitter Url"
        onChange={handleOnChange}
      />
      <button disabled={!filled} onClick={handleAddButton} style={style.button}>
        Add
      </button>
    </div>
  );
};

const style = {
  input: {
    padding: "15px",
    margin: "5px",
    border: "1px solid",
    borderRadius: "5px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "auto",
  },
  button: {
    padding: "12px",
    border: "0px",
    backgroundColor: "dodgerblue",
    borderRadius: "5px",
  },
};

export default CreateUser;
