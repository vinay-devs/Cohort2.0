import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fnToGetData = async () => {
      const res = await axios.get("http://localhost:5001/cards");
      console.log(res.data);
      setUsers(res.data);
    };
    fnToGetData();
  }, []);
  return (
    <>
      <BusinessCard users={users} />
    </>
  );
}

export default App;
