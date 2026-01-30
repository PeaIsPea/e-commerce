import React, {useState, useEffect}  from "react";
import styles from "./styles.module.scss"

const CountDownTimer = ({ targetTime }) => {
  const [time, setTime] = useState(() => calculateTimeLeft());
  const {box, dates} = styles


  function calculateTimeLeft() {
    const sum_ms = +new Date(targetTime) - +new Date();

    let time = {}

    if (sum_ms > 0) {
      time = {
        Days: Math.floor(sum_ms / (1000 * 60 * 60* 24)),
        Hours: Math.floor(sum_ms / (1000 * 60 * 60) % 24),
        Mins: Math.floor((sum_ms / 1000 / 60) % 60),
        Secs: Math.floor((sum_ms / 1000) % 60)
      }
    }

    return time

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const formatNumber = (num) => {
    return String(num).padStart(2, '0')
  }

  const timerComponents = []

  Object.keys(time).forEach((interval) => {
    if (time[interval] !== undefined) {
      timerComponents.push(
        <span key={interval} className={box}>
          {formatNumber(time[interval])} <span className={dates}>{interval}</span>{' '}
        </span>
      );
    }
  });

  return <div>{timerComponents}</div>;

}
export default CountDownTimer;