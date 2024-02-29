const ColorSelector = ({ setBackgroundColor }) => {
  function handleButton(e) {
    console.log(e.target.innerHTML);
    const value = e.target.innerHTML;
    if (value == "Default") {
      setBackgroundColor("pink");
    } else {
      setBackgroundColor(value);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <button style={style.button.red} onClick={handleButton}>
        Red
      </button>
      <button style={style.button.yellow} onClick={handleButton}>
        Yellow
      </button>
      <button style={style.button.black} onClick={handleButton}>
        Black
      </button>
      <button style={style.button.purple} onClick={handleButton}>
        Purple
      </button>
      <button style={style.button.green} onClick={handleButton}>
        Green
      </button>
      <button style={style.button.blue} onClick={handleButton}>
        Blue
      </button>
      <button style={style.button.default} onClick={handleButton}>
        Default
      </button>
    </div>
  );
};

const commonStyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "5px",
  paddingBottom: "5px",
  borderRadius: "7px",
  border: "none",
  marginRight: "5px",
  cursor: "pointer",
};
const style = {
  button: {
    red: {
      ...commonStyle,
      backgroundColor: "red",
    },
    yellow: {
      ...commonStyle,
      backgroundColor: "yellow",
    },
    black: {
      ...commonStyle,
      backgroundColor: "black",
      color: "white",
    },
    purple: {
      ...commonStyle,
      backgroundColor: "purple",
    },
    green: {
      ...commonStyle,
      backgroundColor: "green",
    },
    blue: {
      ...commonStyle,
      backgroundColor: "blue",
    },
    default: {
      ...commonStyle,
      backgroundColor: "pink",
    },
  },
};

export default ColorSelector;
