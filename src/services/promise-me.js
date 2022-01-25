/**
 * TODO:
 */
export const getNameInfo = async () => {
  const response = await fetch('https://api.genderize.io/?name=fora');
  const data = await response.json();
  console.log('Name: async/await', data);
};

/**
 * TODO:
 */
export const getNameInfoThen = () => {
  const data = fetch('https://api.genderize.io/?name=fora')
    .then((response) => response.json())
    .then((finalData) => console.log('Name: .then()', finalData));
};

/**
 * TODO:
 */
export const xkcdByComic = async (comic) => {
  const response = await fetch(`https://xkcd.com/${comic}/info.0.json`);
  const data = await response.json();
  console.log('xkcd: async/await', data);
};

/**
 * TODO:
 */
export const xkcdByComicThen = (comic) => {
  console.log(comic);
  const data = fetch(`https://xkcd.com/${comic}/info.0.json`)
    .then((response) => response.json())
    .then((finalData) => console.log('xkcd: .then()', finalData));
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
