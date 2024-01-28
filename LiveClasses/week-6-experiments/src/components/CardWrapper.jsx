const CardWrapper = ({ textComponent }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <div>{textComponent}</div>
    </div>
  );
};

export default CardWrapper;
