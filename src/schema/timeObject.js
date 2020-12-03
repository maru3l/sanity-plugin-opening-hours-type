export default {
  type: 'object',
  name: 'openingHourTimeObject',
  fields: [
    {
      name: 'hour',
      title: 'Hour',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'minute',
      title: 'Minute',
      type: 'number',
    },
  ],
  preview: {
    select: {
      hour: 'hour',
      minute: 'minute',
    },
    prepare(selection) {
      const { hour, minute } = selection;
      return {
        title: `${hour}h${minute || ''}`,
      };
    },
  },
};
