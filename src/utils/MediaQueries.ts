// improve to use lessthan, morethan
const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const lessThan = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
const moreThan = (minWidth: number) => `@media (max-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  lessThan,
  moreThan
};
