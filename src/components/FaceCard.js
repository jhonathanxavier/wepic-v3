import React from "react";

const FaceCard = ({ imageUrl }) => {
  // console.log("FaceCard imageUrl:", imageUrl);
  return (
    <div>
      {/* <img src={imageUrl} alt="Face" /> */}
      <img src={imageUrl} alt="Face" style={{ width: "600px" }} />

    </div>
  );
};

export default FaceCard;
