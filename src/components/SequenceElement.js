import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

export const SequenceElementStatus = {
  INACTIVE: "inactive",
  GOOD_TIME: "high",
  WARN_TIME: "med",
  CRIT_TIME: "low",
  EXPIRED: "expired",
}

class SequenceElement extends Component {
  constructor(props) {
    super(props);
    if( typeof this.props.timeRemaining_s === 'undefined')
    {
      this.props.timeRemaining_s = this.props.totalTime_s;
    }
    if( typeof this.props.status === 'undefined')
    {
      this.props.status = SequenceElementStatus.INACTIVE;
    }
  }

  render() {
    const { totalTime_s, timeRemaining_s } = this.props;
    let remainingSeconds = ("0" + (timeRemaining_s % 60)).slice(-2);
    let remainingMinutes = ("0" + (Math.floor(timeRemaining_s / 60) % 60)).slice(-2);
    let totalSeconds = ("0" + (totalTime_s % 60)).slice(-2);
    let totalMinutes = ("0" + (Math.floor(totalTime_s / 60) % 60)).slice(-2);
    return (
      <div className={"SequenceElementBlock Block-" + this.props.status}>
        <p className={"SequenceElementTitle Title-" + this.props.status}>
          {this.props.name}
        </p>
        <p className={"SequenceElementTimeRemaining Time-" + this.props.status}>
          {remainingMinutes}:{remainingSeconds} / {totalMinutes}:{totalSeconds}
        </p>
      </div>
    )
  }
}

SequenceElement.propTypes = {
  name: PropTypes.string,
  totalTime_s: PropTypes.number,
  timeRemaining_s: PropTypes.number,
};

SequenceElement.defaultProps = {
  name: "",
  totalTime_s: 0,
};

export default SequenceElement;
