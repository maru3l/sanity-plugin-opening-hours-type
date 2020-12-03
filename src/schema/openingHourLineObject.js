import dayToConditionalString from '../utils/dayToConditionalString';
import groupDays from '../utils/groupDays';
import localizeDay from '../utils/localizeDay';

const days = [
  {
    value: '1',
    title: localizeDay(1),
  },
  {
    value: '2',
    title: localizeDay(2),
  },
  {
    value: '3',
    title: localizeDay(3),
  },
  {
    value: '4',
    title: localizeDay(4),
  },
  {
    value: '5',
    title: localizeDay(5),
  },
  {
    value: '6',
    title: localizeDay(6),
  },
  {
    value: '0',
    title: localizeDay(0),
  },
]

export default {
  name: 'openingHourLineObject',
  type: 'object',
  fields: [
    {
      name: 'day',
      title: 'Days',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
      options: {
        list: days,
      },
    },
    {
      name: 'hours',
      title: 'Opening hours',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'openingHourHourObject' }],
    },
  ],
  preview: {
    select: {
      hours: 'hours',
      day: 'day',
    },
    prepare(selection) {
      const { day } = selection;

      let groupedDays = groupDays(day);

      groupedDays = groupedDays.map(group => dayToConditionalString(group))

      console.log(groupedDays)

      return {
        title: groupedDays.join(', '),
      };
    },
  },
};
