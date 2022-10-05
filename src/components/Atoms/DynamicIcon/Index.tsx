import { ImProfile } from "react-icons/im";
import { AiFillAndroid } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

type IconComponentProps = { name: string };

const Icones = {
  ImProfile: ImProfile,
  AiFillAndroid: AiFillAndroid,
  BsGlobe: BsGlobe,
};

const IconComponent = ({ name }: IconComponentProps) => {
  let DynamicIcon = Icones[name];
  return <DynamicIcon />;
};

export default IconComponent;
