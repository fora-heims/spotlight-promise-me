/**
 * TODO:
 */
export const getNameInfo = async () => {
  const response = await fetch('https://api.genderize.io/?name=fora');
  const data = await response.json();
  console.log(['async/await', data]);
};
/**
 * TODO:
 */
export const getNameInfoThen = () => {
  const data = fetch('https://api.genderize.io/?name=fora')
    .then((response) => response.json())
    .then((finalData) => console.log(['.then()', finalData]));
};
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
