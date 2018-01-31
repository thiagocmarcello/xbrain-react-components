const toString = (value) => {
  if (value || typeof value === 'number') {
    return value.toString();
  }
  return String();
};

export default toString;
