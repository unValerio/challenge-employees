import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

// General selector for this "example" reducer
// eslint-disable-next-line import/prefer-default-export
export const selectEmployees = (state: RootState) => state.employees;

export const selectEmployeesStatus = createSelector(selectEmployees, (employees) => {
  return employees.status;
})

export const selectEmployeesData = createSelector(selectEmployees, (employees) => {
  return employees.data;
})

export const selectActiveEmployees = createSelector(selectEmployeesData, (employees) => {
  return employees.filter((employee) => employee.active);
})

// Memoized selector from reduxjs/reselect
// export const selectSomething = createSelector(selectExample, (example) => {
//   return Object.values(example).reduce((total, item) => total + item.quantity, 0);
// });

// Memoized selector from reduxjs/reselect with multiple input selectors giving
// export const selectSomething = createSelector([selectA, selectB, selectC], (a, b, c) => {
//   return a + b + c;
// });

// Notes:
// Similarly, a memoized selector should never use state => state as an input! That will force the selector to always recalculate.
// createSelector only memoizes the most recent set of parameters

// Uso en componentes:
// const something = useAppSelector(selectSomething);

// Uso en slices:
// Investigar, tal vez algo de draft e immer

// Uso en thunk:
// const something = selectSomething(getState());
