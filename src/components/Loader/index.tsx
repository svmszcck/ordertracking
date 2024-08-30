import { BulletList } from "react-content-loader";

import Colors from "constants/colors";
import Styled from "./styles";

const Loader = () => {
  return (
    <Styled>
      <BulletList backgroundColor={Colors.GRAY_DARKER} className="loader" />
    </Styled>
  );
};

export default Loader;
