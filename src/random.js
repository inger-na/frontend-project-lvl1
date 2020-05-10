//Function by default, generate random numbers beetwin 0 and 100
const getRandomNumber = (min = 0, max = 100) => {
  const random = Math.floor((Math.random() * max) + min);
  return random;
};
export default getRandomNumber;
