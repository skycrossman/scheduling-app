import { Day } from "@/db/days";
import { CONSTS } from "@/utils/constants"

export const getPercentThroughDay = (now: Date, start: Date, end: Date) =>
  ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

export const getNumHalfHours = (start: Date, end: Date) => {
  const lengthOfDay = end.getTime() - start.getTime();
  return lengthOfDay / 1000 / 60 / 30;
};

export const arraysEqual = (a: any[], b: any[]) =>
  a.length === b.length && a.every((value) => b.includes(value));

export const convertParamDateTime = (date: string, time: string) => {
  return new Date(`${CONSTS.TIME_YEAR}-${date}T${time}:00${CONSTS.TIME_OFFSET}`);
};

export const dateOnDay = (date: Date, day: Day) => {
  return (
    date.getTime() >= new Date(day.Start).getTime() &&
    date.getTime() <= new Date(day.End).getTime()
  );
};
