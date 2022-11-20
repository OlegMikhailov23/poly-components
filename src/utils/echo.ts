export const echo = <T> (value: T) : T => {
  console.log(value);

  return value;
}

// constraining
// T => {length: number}
export const echoLength = <T extends {length: number}> (value: T): number => {
  console.log(value.length);

  return value.length;
};
