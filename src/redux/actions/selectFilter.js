import { CHANGE_FILTER } from './types';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export default changeFilter;
