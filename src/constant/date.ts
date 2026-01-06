import dayjs from "dayjs";

export const dateformat = "DD MMM YYYY";
export const parseDate = (date: string) => {
  return dayjs(date).format(dateformat);
};
