import React from "react";

const PreviewPhoto = props => {
  const { pictureUrl } = props;
  return (
    <div>
      <img style={{ height: "80%" }} src={pictureUrl} width="auto" />
    </div>
  );
};

export default PreviewPhoto;
