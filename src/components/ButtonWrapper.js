/* eslint-disable import/no-anonymous-default-export */
const translateProps = (props) => {
  let modifiedStyle = { ...props };
  if (props.disable) {
    modifiedStyle = { color: "red" };
  } else {
    modifiedStyle = { color: "green" };
  }
  return modifiedStyle;
};

export default (ButtonWrapper) => {
  return function toBeRendered(props) {
    return ButtonWrapper(translateProps(props));
  };
};
