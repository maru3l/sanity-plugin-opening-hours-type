export default {
  name: 'oppeningHours',
  type: 'object',
  fields: [
    {
      name: 'openingHours',
      type: 'array',
      of: [{ type: 'oppeningHourLineObject' }],
    },
  ],
};
