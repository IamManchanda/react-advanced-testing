const asyncMiddleware = ({ dispatch }) => {
  return function asyncWithNextMiddleware(next) {
    return function asyncWithAction(action) {
      if (!action.payload.response || !action.payload.response.then) {
        return next(action);
      }
    };
  };
};

export default asyncMiddleware;
