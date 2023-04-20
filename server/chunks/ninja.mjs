import { defineEventHandler, getQuery, readBody } from 'h3';

const ninja = defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);
  return {
    message: `Hello ${name}!!! Your are ${age} yers old.`
  };
});

export { ninja as default };
//# sourceMappingURL=ninja.mjs.map
