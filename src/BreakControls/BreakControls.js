import React from 'react';

function BreakControls({ session, breakDuration, setBreakDuration }) {
  
  return (
    <div className="col-4" >
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {breakDuration < 10 ? "0" + breakDuration : breakDuration}:00
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => setBreakDuration(breakDuration - 1)}
                  disabled={breakDuration <= 1 || session}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => setBreakDuration(breakDuration + 1)}
                  disabled={breakDuration >= 15 || session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
      </div>
  )
}
      
export default BreakControls;