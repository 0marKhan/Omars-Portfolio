import "./BasicTextFields.scss";

const BasicTextFields = (props) => {
  return (
    <div className="basic-textform">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
export default BasicTextFields;
