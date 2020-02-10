import React from "react";

const FormField = props => {
  const id = props.id;

  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {props.formData.validation.required && !props.formData.valid
          ? props.formData.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (props.formData.element) {
      case "input":
        formTemplate = (
          <div>
            <input
              {...props.formData.config}
              value={props.formData.value}
              onChange={event => {
                props.change({ event, id });
              }}
            />

            {showError()}
          </div>
        );

        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;
