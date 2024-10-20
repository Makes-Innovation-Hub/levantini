import { useState } from "react";
import check from "../../../../public/images/check.svg";
import locked from "../../../../public/images/locked.svg";
import arrow from "../../../../public/images/arrow.svg";
import { useState } from "react";
import check from "../../../../public/images/check.svg";
import locked from "../../../../public/images/locked.svg";
import arrow from "../../../../public/images/arrow.svg";
import * as S from "./CategoryLabel.styles";
import ToolTip from "../ToolTip/ToolTip";
import { CategoryToolTipContainer } from "../ToolTip/CatgoeryToolTip.styles";
import CatgoeryToolTip from "../ToolTip/CatgoeryToolTip";

const CategoryLabel = ({ status }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusImage = () => {
    switch (status) {
      case "completed":
        return check;
      case "started":
        return arrow;
      case "locked":
        return locked;
      case "in progress":
        return arrow;
      default:
        return null;
    }
  };

  return (
    <S.Category
      status={status}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {status}
      <img src={getStatusImage()} alt={status} />
      {status === "locked" && isHovered && (
        <ToolTip position="left">
          <CatgoeryToolTip />
        </ToolTip>
      )}
    </S.Category>
  );
};

export default CategoryLabel;
