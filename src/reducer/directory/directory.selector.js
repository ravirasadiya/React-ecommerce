import { createSelector } from 'reselect';

const selectDirecoty = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirecoty],
  (directory) => directory.sections
);
