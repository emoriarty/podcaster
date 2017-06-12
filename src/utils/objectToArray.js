export default function objectToArray (object) {
  return Object.keys(object)
    .reduce(
      (memo, key) => {
        memo.push([key, object[key]])
        return memo
      },
      []
    )
}
