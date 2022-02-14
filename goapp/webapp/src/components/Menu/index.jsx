import { Menubar } from "primereact/menubar";

import { Logo } from "../../components/Logo";
import { itemsMenu } from "../../utils/itemsMenu";

import "./styles.scss";

export const Menu = () => {
  return <Menubar className="header" start={<Logo />} model={itemsMenu} />;
};
