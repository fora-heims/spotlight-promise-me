/**
 * TODO:
 */
const getNameInfo = async () => {
  const response = await fetch('https://api.genderize.io/?name=fora');
  const data = await response.json();
  console.log(['async/await', data]);
};
/**
 * TODO:
 */
const getNameInfoThen = () => {
  const data = fetch('https://api.genderize.io/?name=fora').then((response) =>
    response.json()
  );
  console.log(['.then()', data]);
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
