import React from "react";

const PreviewPhoto = props => {
  const { pictureUrl } = props;
  return (
    <div>
      <img className="img-fluid" src={pictureUrl} width="auto" />
    </div>
  );
};

export default PreviewPhoto;
