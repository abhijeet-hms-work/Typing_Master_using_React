import { useEffect, useRef, useState } from "react";
import { Words } from "../../Constant/Constant";

function Screen(props) {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const [segmentatedData, setSgmentatedData] = useState([]);

  useEffect(() => {
    const bufferData = [];
    for (let i = 0; i < 50; i++) {
      bufferData.push(Words[Math.floor(Math.random() * Words.length)]);
    }
    setData(bufferData);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (data.length == 0) {
      return;
    }

    const bufferSegmentatedData = [];
    var counter = 0;

    while (counter + 10 <= data.length) {
      const rowData = [];
      for (let i = counter; i < counter + 10; i++) {
        rowData.push(data[i]);
      }
      bufferSegmentatedData.push(rowData);
      counter += 10;
    }

    console.log(bufferSegmentatedData);
    setSgmentatedData(bufferSegmentatedData);
  }, [data]);

  return (
    <>
      <div id="main-screen">
        {segmentatedData.map((row, rowIndex) => (
          <div key={rowIndex} className={rowIndex + "screen-row"}>
            {row.map((value, valueIndex) => (
              <div id={valueIndex} key={valueIndex} className="display-value">
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          ref={inputRef}
          id="main-input"
          placeholder="Start Typing Here"
          autoComplete="off "
        />
      </div>
    </>
  );
}

export default Screen;
