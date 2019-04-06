import tv4 from 'tv4';
import stateSchema from 'middlewares/state-validator/state-schema';

const stateValidator = ({ dispatch, getState }) => {
  return function asyncWithNextResponse(next) {
    return async function asyncWithPendingAction(pendingAction) {
      const action = await pendingAction;
      next(action);
      if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected');
        console.log('Current state that failed the schema', getState());
      } else {
        console.log('Current state that passed the schema', getState());
      }
    };
  };
};

export default stateValidator;
