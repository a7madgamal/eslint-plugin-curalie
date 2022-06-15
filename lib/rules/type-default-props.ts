import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`
);

export const rule = createRule({
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id != null) {
          if (/^[a-z]/.test(node.id.name)) {
            context.report({
              messageId: "uppercase",
              node: node.id,
            });
          }
        }
      },
    };
  },
  name: "type-default-props",
  meta: {
    docs: {
      description: "defaultProps must have the same types as props.",
      recommended: "error",
    },
    messages: {
      uppercase: "Add typing for defaultProps using the props type.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
