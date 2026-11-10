/** A planning estimate in hours: the low and high ends of a range. */
export interface HourRange {
  min: number;
  max: number;
}

/** One piece of work a boilerplate saves, with its estimated effort. */
export interface EffortItem {
  task: string;
  hours: HourRange;
}

export const isValidRange = ({ min, max }: HourRange) =>
  Number.isFinite(min) && Number.isFinite(max) && min > 0 && min <= max;

export const totalEffort = (items: EffortItem[]): HourRange =>
  items.reduce(
    (sum, { hours }) => ({ min: sum.min + hours.min, max: sum.max + hours.max }),
    { min: 0, max: 0 },
  );

const number = new Intl.NumberFormat("en-US");

export function formatHours({ min, max }: HourRange): string {
  if (min === max) return `${number.format(min)} ${min === 1 ? "hour" : "hours"}`;
  return `${number.format(min)}–${number.format(max)} hours`;
}
