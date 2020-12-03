export default (day) => {
  const date = new Date();

  const delta = date.getDay() - Number(day);

  date.setDate(date.getDate() - delta);

  return date.toLocaleString(window.navigator.language, { weekday: 'long' });
};
