export const convertToHumanTime = (duration) => {
  let seconds = parseInt((duration / 1000) % 60, 10);
  seconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  return `${minutes}:${seconds}`;
};
