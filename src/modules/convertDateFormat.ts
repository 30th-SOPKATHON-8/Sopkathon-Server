import dayjs from "dayjs";

import convertToTwoDigts from "./convertToTwoDigits";

export const convertDateFormat = (date: Date): string => {
  const createDay = dayjs(date);

  const createdAt = `${createDay.month() + 1}월 ${createDay.date()}일 ${convertToTwoDigts(
    createDay.hour(),
  )}:${convertToTwoDigts(createDay.minute())}`;

  return createdAt;
};
