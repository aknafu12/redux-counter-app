const initialSate = {
  count: 0,
};

const counterReducer = (sate = initialSate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...sate,
        count: sate.count + 1,
      };
    case "DECREMENT":
      return {
        ...sate,
        count: sate.count - 1,
      };
    default:
      return sate;
  }
};
export default counterReducer;
