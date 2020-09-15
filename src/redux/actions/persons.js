export const PERSONS_FETCH_DATA_SUCCESS = "PERSONS_FETCH_DATA_SUCCESS";
export const ADD_MUGGER = "ADD_MUGGER";

export function personsFetchDataSuccess(persons) {
  return {
    type: PERSONS_FETCH_DATA_SUCCESS,
    persons,
  };
}

export function personsFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((persons) => dispatch(personsFetchDataSuccess(persons)));
  };
}

export function addMugger() {
  return {
    type: ADD_MUGGER,
  };
}

export function personsPostData(url, body) {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(addMugger());
      })
      .catch((error) => console.log("error", error));
  };
}
