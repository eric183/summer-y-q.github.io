import dayjs from "dayjs";

// YYYY - MM - DD HH: mm: ss
export const YMD_Format = (time: string) => dayjs(time).format("YYYY-MM-DD");

export const YMD_DOT_Format = (time: string) =>
  dayjs(time).format("YYYY.MM.DD");
