import { BulletList } from "react-content-loader";

import Colors from "constants/colors";
import Styled from "./styles";

const Loader = () => {
  return (
    <Styled>
      <BulletList
        backgroundColor={Colors.GRAY_DARKER}
        className="loader"
        aria-label="Page is loading"
      />
    </Styled>
  );
};

export default Loader;
