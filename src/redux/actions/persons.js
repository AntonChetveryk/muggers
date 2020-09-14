export const PERSONS_FETCH_DATA_SUCCESS = "PERSONS_FETCH_DATA_SUCCESS";

export function personsFetchDataSuccess(persons) {
  return {
    type: PERSONS_FETCH_DATA_SUCCESS,
    persons,
  };
}

export function personsFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((persons) => dispatch(personsFetchDataSuccess(persons)));
  };
}
