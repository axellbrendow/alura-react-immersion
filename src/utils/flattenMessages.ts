type FlattenMessages = Record<string, string>;

interface NestedMessages
  extends Record<string, string | NestedMessages | NestedMessages[]> {}

export default function flattenMessages(
  nestedMessages: NestedMessages,
  prefix = ""
) {
  return Object.keys(nestedMessages).reduce<FlattenMessages>(
    (messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "string") {
        messages[prefixedKey] = value;
      } else if (Array.isArray(value)) {
        value.forEach((message, i) =>
          Object.assign(
            messages,
            flattenMessages(message, `${prefixedKey}${i}`)
          )
        );
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
    },
    {}
  );
}
