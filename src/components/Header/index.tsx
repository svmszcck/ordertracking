import { Button } from "components";
import Logo from "images/logo.png";
import Styled from "./styles";

type HeaderProps = {
  signOut: () => void;
};

const Header = ({ signOut }: HeaderProps) => {
  return (
    <Styled>
      <img src={Logo} width={60} alt="logo" className="clickable" />
      <Button
        text="Sign Out"
        onClick={signOut}
        variant="outline"
        className="sign-out"
        ariaLabel="sign out"
      />
    </Styled>
  );
};

export default Header;
