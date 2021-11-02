import snakeCaseKeys from 'snakecase-keys';

const convertToFormData = (fields: object) => {
  const formData = new FormData();
  const transformedFields = snakeCaseKeys(fields, { deep: false });

  Object.keys(transformedFields).forEach(key => {
    if (
      Object.prototype.toString.call(transformedFields[key]) === '[object File]'
    ) {
      formData.append(key, new Blob([transformedFields[key]]));
      formData.append(`${key}_name`, transformedFields[key].name);
    } else {
      formData.append(key, transformedFields[key]);
    }
  });

  return formData;
};

export default convertToFormData;
