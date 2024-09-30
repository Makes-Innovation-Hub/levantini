const CategoryLable = ({ divs }) => {
  const status = "completed";

  const renderDiv = () => {
    switch (status) {
      case "completed":
        return divs.completed;
      case "started":
        return divs.started;
      case "inProgress":
        return divs.inProgress;
      case "locked":
        return divs.locked;
      default:
        return null;
    }
  };

  return <div>{renderDiv()}</div>;
};

export default CategoryLable;
