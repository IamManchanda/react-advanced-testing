const asyncResponse = ({ dispatch }) => {
  return function asyncWithNextResponse(next) {
    return async function asyncWithPendingAction(pendingAction) {
      const action = await pendingAction;
      if (!action.payload || !action.payload.response || !action.payload.response.then) {
        return next(action);
      }
      action.payload.response.then((promisedResponse) => {
        const newAction = { ...action, payload: { response: promisedResponse } };
        dispatch(newAction);
      });
    };
  };
};

export default asyncResponse;
