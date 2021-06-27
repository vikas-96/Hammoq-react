import _ from "lodash";

const handleError = (error) => {
  let errorData = {};
  if (error && error.response && error.response.status === 422) {
    let fields = _.values(error.response.data);
    fields.forEach(function (key, index) {
      errorData[index] = key.message;
    });
    !_.isEmpty(errorData) && alert(Object.values(errorData).join("<br/>"));

    return errorData;
  }
  alert(error.response.data.message || error.response.data.error.message);

  return {};
};

export default handleError;
