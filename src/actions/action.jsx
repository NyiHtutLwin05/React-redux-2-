import axios from "axios";

export const GetTitle = () => {
  return async (dispatch) => {
    try {
      await axios.get(` http://localhost:3000/posts`).then((e) =>
        dispatch({
          type: "GETUSERS",
          payload: e.data,
        })
      );
    } catch (e) {
         console.log('error',e);
    }
  };
};
