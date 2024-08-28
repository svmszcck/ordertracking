import React, { useState } from "react";

import Placeholder from "images/placeholder.jpg";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {!loaded && (
        <img
          src={Placeholder}
          alt="placeholder"
          className={className}
          data-testid="img-placeholder"
        />
      )}
      <img
        src={src}
        alt={alt}
        style={loaded ? undefined : { display: "none" }}
        className={className}
        onLoad={() => setLoaded(true)}
        data-testid="img"
      />
    </>
  );
};

export default Image;
