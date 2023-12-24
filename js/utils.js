// Создаём функию , которая будет перемешивать массив иконок и выводить их в произвольном порядке
export const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
// Создаём функию , которая создаёт идентичную пару случайной карте из перемешанного массива
export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);
// Создаём массив иконок с названиями из библиотеки
export const createIconsArray = (initialCount) => {
  const cardsIcons = [
      '1',
      'cloud',
      'play',
      'bolt',
      'stop',
      'cogs',
      'atom',
      'basketball-ball'
  ];
// Создаём варианты колличества карт на игровом поле
  switch (initialCount) {
      case 10:
          return cardsIcons.slice(0, 5);
      case 12:
          return cardsIcons.slice(0, 6);
      case 14:
          return cardsIcons.slice(0, 7);
      case 16:
          return cardsIcons;
      default:
          break;
  }
}
