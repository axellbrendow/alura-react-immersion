interface NestedMessages extends Record<string, string | NestedMessages> {}
type FlattenMessages = Record<string, string>;

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
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }
      return messages;
    },
    {}
  );
}
