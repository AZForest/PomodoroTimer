import React from 'react';

function PomodoroContent({ session, focusDuration, breakDuration }) {
  
  function formatTime(timeRemaining) {
    let seconds = "";
    if ((timeRemaining % 60) < 10) {
      seconds = "0" + timeRemaining % 60;
    } else {
      seconds = timeRemaining % 60;
    }
    return `${Math.floor(timeRemaining / 60)}:${seconds}`;
  }
  
  function getSessionLabelTime(type) {
    if (type === "Focusing") {
      if (focusDuration < 10) {
        return "0" + focusDuration + ":00";
      } else {
        return focusDuration + ":00";
      }
    } else {
      if (breakDuration < 10) {
        return "0" + breakDuration + ":00";
      } else {
        return breakDuration + ":00";
      }
    }
  }
  
  function ariaHandler(type) {
    let ratio;
    if (type === "Focusing") {
      ratio = 100 / (focusDuration * 60);
      return 100 - (session.timeRemaining * ratio);
    } else {
      ratio = 100 / (breakDuration * 60);
      return 100 - (session.timeRemaining * ratio);
    }
  }
  
  function widthHandler(type, timeRemaining) {
    if (type === "Focusing") {
      return (1 - (timeRemaining / (focusDuration * 60))) * 100;
    } else {
      return (1 - (timeRemaining / (breakDuration * 60))) * 100;
    }
  }
  
  return (
    <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused*/}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration*/}
            <h2 data-testid="session-title">
              {session.label} for {getSessionLabelTime(session.label)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session*/}
            <p className="lead" data-testid="session-sub-title">
              {formatTime(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" >
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaHandler(session.label)} // TODO: Increase aria-valuenow as elap // TODO: Increase width % as elapsed time increases
                style={{ width: `${widthHandler(session.label, session.timeRemaining)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default PomodoroContent;