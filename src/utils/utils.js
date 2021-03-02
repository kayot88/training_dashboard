export const stars = (arrSize, width, height) => {
  const starsArr = [];
  const count = arrSize;
  for (let index = 0; index < count; index++) {
    starsArr.push(
      new Object({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        size: Math.random() * 2,
        duration: 5 + Math.floor(Math.random() * 10),
        delay: Math.floor(Math.random() * 10),
      })
    );
  }
  return starsArr;
};
