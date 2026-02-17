import React from "react";
type Props = {
  dateTime: Date;
  city: string;
  timeZone: string;
};
const Timer: React.FC<Props> = ({ dateTime, city, timeZone }) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(dateTime);

  const dateObj = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  );

  const { day, month, year, hour, minute, second } = dateObj;

  return (
    <div className="timer-card">
      <div className="timer-date">{`${day}/${month}/${year}`}</div>
      <div className="timer-time">
        <span>{hour}:</span>
        <span>{minute}:</span>
        <span>{second}</span>
      </div>
      <div className="timer-meta">
        <span className="timer-city">{city}</span>
        <span className="timer-zone">{timeZone}</span>
      </div>
    </div>
  );
};

export default Timer;
