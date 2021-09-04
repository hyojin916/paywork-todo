export const createDate = (date = new Date()): string => {
  const present = new Date();

  const y = present.getFullYear();
  const m = present.getMonth() + 1;
  const d = present.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  const modifiedMonth = `${m < 10 ? `0${m}` : m}`;
  const modifiedDate = `${d < 10 ? `0${d}` : d}`;

  const dateString = `${y}/${modifiedMonth}/${modifiedDate}`;
  const timeString = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return `${dateString}/${timeString}`;
};
