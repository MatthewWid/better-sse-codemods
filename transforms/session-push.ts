import { Transform } from "jscodeshift";

const transform: Transform = (fileInfo, api) => {
  const { jscodeshift: j } = api;
  const root = j(fileInfo.source);

  const calls = root.find(j.CallExpression, {
    callee: {
      callee: { name: "session" },
      property: { name: "push" },
    },
  });

  calls.forEach((call) => {
    const [first, second, ...rest] = call.value.arguments;

    call.value.arguments = [second, first, ...rest];
  });

  return root.toSource();
};

export default transform;
