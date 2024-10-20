import { useState } from "react";
import check from "../../../../public/images/check.svg";
import locked from "../../../../public/images/locked.svg";
import arrow from "../../../../public/images/arrow.svg";
import ToolTip from "../ToolTip/ToolTip";
import CatgoeryToolTip from "../CategoryToolTip/CatgoeryToolTip";
import * as S from "./CategoryLabel.styles";

const CategoryLabel = ({ status, position }) => {
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
        <ToolTip position={position}>
          <CatgoeryToolTip />
        </ToolTip>
      )}
    </S.Category>
  );
};

export default CategoryLabel;
