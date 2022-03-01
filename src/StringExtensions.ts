declare global {
  interface String {
    (subString: string, ignoreCase: boolean): boolean;
  }
}

// eslint-disable-next-line
String.prototype.contains = function (subString: string, ignoreCase: boolean = true): boolean {
  if (ignoreCase) {
    return this.toLowerCase().includes(subString.toLowerCase());
  } else {
    return this.includes(subString);
  }
};

export {};
