export const INITIAL_STATE = {
  loading: false,
  business: [],
  error: false,
};
export const BusinessReducer = (state, action) => {
  switch (action.type) {
    case "FETCH-START":
      return {
        loading: true,
        error: false,
        business: [],
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        business: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        business: [],
      };
    default:
      return state;
  }
};
