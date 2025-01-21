/** @format */

export function formatToDollars(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("Input must be a number");
  }

  return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function formatToDollarsWithPrefix(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("Input must be a number");
  }

  const prefix = amount > 0 ? "+" : amount < 0 ? "-" : "";

  const formattedAmount = Math.abs(amount)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${prefix}$${formattedAmount}`;
}

export const lightenColor = (hex, amount = 0.3) => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  const lighten = (x) => Math.min(255, Math.floor(x + (255 - x) * amount));

  return `#${[lighten(r), lighten(g), lighten(b)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const formatDay = (dayString) => {
  const day = parseInt(dayString, 10);
  const suffixes = { 11: "th", 12: "th", 13: "th", 1: "st", 2: "nd", 3: "rd" };
  const lastDigit = day % 10;

  if (suffixes[day]) return `${day}${suffixes[day]}`;
  return `${day}${suffixes[lastDigit] || "th"}`;
};

export const getNext14Days = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i <= 14; i++) {
    const tempDate = new Date(today);
    tempDate.setDate(today.getDate() + i);
    days.push(tempDate.getDate());
  }

  return days;
};

export const getStatus = (day) => {
  const next14Days = getNext14Days();
  const today = new Date().getDate();

  if (next14Days.includes(day)) return "soon";
  if (today >= day) return "paid";
  return "";
};

export const getRecurringBills = (transactions) => {
  return transactions
    .filter(({ recurring }) => recurring)
    .map((bill) => {
      const date = new Date(bill.date);
      const day = date.getDate();

      const dueDate = new Date(date);
      dueDate.setDate(date.getDate() + 14);

      return {
        ...bill,
        due: `Monthly-${formatDay(day)}`,
        dueDate: dueDate.toISOString(),
        status: getStatus(day),
      };
    });
};
