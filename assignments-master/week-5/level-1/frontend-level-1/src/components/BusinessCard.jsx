const BusinessCard = () => {
  return (
    <div style={style.card}>
      <div style={{ paddingLeft: "25px", marginBottom: "10px" }}>
        <h1 style={style.name}>Vinay Dev S</h1>
        <p style={style.para}>A student in the 100xDevs Cohort 2.0</p>
        <h2>Interests</h2>
        <ul style={style.ul}>
          <li>WebDev</li>
          <li>OpenSource</li>
          <li>AppDev</li>
        </ul>

        <button style={style.button}>LinkedIn</button>
        <button style={style.button}>Twitter</button>
      </div>
    </div>
  );
};

const style = {
  card: {
    border: "2px solid grey",
    boxShadow: "3px 2px 24px 0px grey",
    borderRadius: "10px",
    fontFamily: "cursive",
    width: "400px",
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  para: {
    color: "grey",
  },
  ul: {
    listStyle: "none",
    padding: "0px",
    color: "grey",
  },
  button: {
    backgroundColor: "dodgerblue",
    border: "none",
    borderRadius: "5px",
    margin: "5px",
    padding: "8px",
    color: "White",
    cursor: "pointer",
  },
};
export default BusinessCard;
