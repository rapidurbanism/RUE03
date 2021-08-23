const numbro = require("numbro");

export const formatNumber = (
  value: number,
  thousandSeparated: boolean = true,
  mantissa: number = 0
) => {
  return numbro(value).format({
    thousandSeparated: thousandSeparated,
    mantissa: mantissa,
  });
};

export const currencyLocalStyle = {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
};
