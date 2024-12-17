import { useEffect, useState } from "react";
import "./Statistics.css";
function Statistics(props) {
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("HIGHSCORE") == undefined) {
      localStorage.setItem("HIGHSCORE", "0");
    }
    setWpm(Number(localStorage.getItem("HIGHSCORE")));
  }, []);

  return (
    <div className="stat-box">
      <div>Time Remainin : {props.time} secs</div>
      <div>Best Speed : {wpm} WPM</div>
    </div>
  );
}
export default Statistics;
