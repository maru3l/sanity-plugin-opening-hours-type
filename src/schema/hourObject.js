export default {
  type: 'object',
  name: 'openingHourHourObject',
  fields: [
    {
      name: 'fromTime',
      title: 'From',
      type: 'openingHourTimeObject',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'toTime',
      title: 'To',
      type: 'openingHourTimeObject',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'note',
      title: 'Note',
      type: 'string',
    },
  ],
  preview: {
    select: {
      fromTime: 'fromTime',
      toTime: 'toTime',
      note: 'note',
    },
    prepare(selection) {
      const { fromTime, toTime, note } = selection;
      return {
        title: `${fromTime.hour}h${fromTime.minute || ''} to ${toTime.hour}h${
          toTime.minute || ''
        }`,
        subtitle: note,
      };
    },
  },
};
