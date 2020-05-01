// Random number default(0 - 100);
const math = (max = 100, min = 1) => {
  const random = Math.floor((Math.random() * max) + min);
  return random;
};
export default math;
