const Details = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          borderBottom: "2px solid grey",
        }}
      >
        <img
          src="https://shorturl.at/bjluS"
          style={{
            height: "90px",
            width: "90px",
            borderRadius: "50%",
            position: "absolute",
            top: "20%",
          }}
          alt=""
        />
        <h2 style={{ fontSize: "20px" }}>
          Rita Correia <span style={{ color: "grey" }}>32</span>
        </h2>
        <p style={{ color: "gray", marginTop: "0" }}>London</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "grey",
        }}
      >
        <div>
          <h2 style={{ color: "black" }}>80K</h2>
          <p>Followers</p>
        </div>
        <div>
          <h2 style={{ color: "black" }}>803K</h2>
          <p>Likes</p>
        </div>
        <div>
          <h2 style={{ color: "black" }}>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
