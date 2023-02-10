import { useState, useEffect } from "react";
import { getTimeFomatter } from "@/utils/date";

function LocalTime() {
  const [timeFomatter, setTimeFomatter] = useState<string>(getTimeFomatter());

  useEffect(() => {
    const interval = setInterval(
      () => setTimeFomatter(getTimeFomatter()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return <span>{timeFomatter}, Ho Chi Minh City</span>;
}

export default LocalTime;
