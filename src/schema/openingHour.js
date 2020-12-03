export default {
  name: 'openingHours',
  type: 'object',
  fields: [
    {
      name: 'openingHours',
      type: 'array',
      of: [{ type: 'openingHourLineObject' }],
    },
  ],
};
