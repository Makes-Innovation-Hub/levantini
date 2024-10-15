import { SvgWrapper } from "./Crown.styles";

const Crown = ({ rank }) => {
  let iconSrc;
  switch (rank) {
    case 1:
      iconSrc = "/images/crown-gold.svg";
      break;
    case 2:
      iconSrc = "/images/crown-silver.svg";
      break;
    case 3:
      iconSrc = "/images/crown-bronze.svg";
      break;
    default:
      iconSrc = null;
  }

  return (
    <SvgWrapper>{iconSrc && <img src={iconSrc} alt={`Rank ${rank} crown`} />}</SvgWrapper>
  );
};

export default Crown;
