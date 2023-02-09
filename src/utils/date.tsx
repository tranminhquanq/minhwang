import { format, localeFormat } from "light-date";

export const visibleDate = (date: string) => {
  const d = new Date(date);
  if (!d.getFullYear()) return <span>{date}</span>;

  return (
    <>
      {String(d.getMonth() + 1).padStart(2, "0")}
      <span>/</span>
      {d.getFullYear() % 100}
    </>
  );
};

export const a11yDate = (date: string) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};

export const formateDatePreview = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, "{MMM}", "en-GB");
  const _date = format(date, "{dd}");

  return `${month} ${_date} `;
};

export const formateDateFull = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, "{MMMM}", "en-GB");
  const _date = format(date, "{dd}");
  const year = format(date, "{yyyy}");

  return `${_date} ${month}, ${year}`;
};

export const validDate = (d: string): string => {
  const date = new Date(d);

  return format(date, "{yyyy}-{MM}-{dd}");
};
