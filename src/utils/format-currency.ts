const formatCurrency = (value: number, isObject: boolean = false): any => {
  let fractionDigits: number = 2,
    integerPart: string = Math.trunc(value).toLocaleString(navigator.language, {
      maximumFractionDigits: 0,
    }),
    fractionPart: string = (value % 1)
      .toFixed(fractionDigits)
      .toString()
      .substring(2);

  if (isObject) {
    return {
      integerPart: integerPart,
      fractionPart: fractionPart,
    };
  } else {
    return `${integerPart}.${fractionPart}`;
  }
};

export default formatCurrency;
