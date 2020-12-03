import localizeDay from './localizeDay';
import { groupBySequence } from './groupDays';

const isSequencial = (array) => {
  const newArray = [...array, ...array.map(e => e + 7)].sort((a, b) => a - b);

  const grouped = groupBySequence(newArray);

  return !!grouped.findIndex((e) => e.length === grouped.length);
}

const dayToConditionalString = (array) => {
  if (array.length === 1) {
    return localizeDay(array[0]);
  }

  if (array.length === 2) {
    return array.map((day) => localizeDay(day)).join(' and ');
  }


  if (isSequencial(array)) {
    return [array.slice(0, 1)[0], array.slice(-1)[0]]
      .map((day) => localizeDay(day))
      .join(' to ');
  }
};

export default dayToConditionalString;
