import React from "react";
import Select from "react-select";

const customStyles = {
  container: (provided) => ({
    ...provided,
    boxShadow: "0px 0px 3px rgba(255, 255, 255)",
    fontFamily: "mont",
    borderRadius: "25px",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#111111",
    boxShadow: "0px 0px 3px rgba(255, 255, 255)",
    borderRadius: "25px",
    padding: "0.5rem",
    border: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "10px",
    backgroundColor: state.isFocused ? "#222222" : "#111111",
    fontFamily: "mont",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#bbbbbb",
  }),
  noOptionsMessage: (provided, state) => ({
    ...provided,
    backgroundColor: "#111111",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#111111",
    borderRadius: "10px",
    boxShadow: "0px 0px 1.8px rgba(214, 214, 214, 0.12)",
    zIndex: 999,
    pointerEvents: "auto", // Ensures clicks are captured by the menu
  }),
  menuList: (provided, state) => ({
    ...provided,
    backgroundColor: "#111111",
    padding: "10px",
    pointerEvents: "auto", // Ensures clicks are captured by the menu items
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999, // Ensures the menu appears above other elements
  }),
  input: (provided, state) => ({
    ...provided,
    color: "#bbbbbb",
  }),
};

const Combobox = ({ options, value, onChange }) => {
  // Use React.useEffect to set up the menu portal target
  React.useEffect(() => {
    // Create a div for the portal if it doesn't exist
    if (!document.getElementById('select-portal')) {
      const portalDiv = document.createElement('div');
      portalDiv.id = 'select-portal';
      portalDiv.style.position = 'absolute';
      portalDiv.style.zIndex = '9999';
      document.body.appendChild(portalDiv);
    }
  }, []);

  return (
    <Select
      options={options}
      styles={customStyles}
      value={value}
      onChange={onChange}
      className="combo"
      menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
      closeMenuOnScroll={false}
      blurInputOnSelect={true}
      captureMenuScroll={true}
    />
  );
};

export default Combobox;
