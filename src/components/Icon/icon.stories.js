import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="lime" opacity={0.8} />;
};

export const CustomSize = () => {
  return <Icon icon={SmileIcon} width={48} height={48} color="lime" />;
};

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
};

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: "#ccc" }} />;
};

export const FontAwesomeSizes = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFolder} style={{ fontSize: "24px" }} />
      <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: "36px" }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
    </div>
  );
};
