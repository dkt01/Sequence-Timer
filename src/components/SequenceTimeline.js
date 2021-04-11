import React, { Component } from "react";
import SequenceElement, {SequenceElementStatus} from "./SequenceElement";
import PropTypes from "prop-types";
import "../App.css";

class SequenceTimeline extends Component {
  render() {
    var timeToAllocate = this.props.elapsedSeconds;
    const updatedChildren = React.Children.map(this.props.children,
                                               (child, i) => {
                                                let timeToReduce = Math.min(child.props.totalTime_s, timeToAllocate);
                                                let timeRemaining_s = child.props.totalTime_s - timeToReduce;
                                                timeToAllocate -= timeToReduce;
                                                if(timeRemaining_s === 0) {
                                                  return React.cloneElement(child, {
                                                    timeRemaining_s: timeRemaining_s,
                                                    status: SequenceElementStatus.EXPIRED })
                                                } else if(timeRemaining_s < this.props.critThreshold) {
                                                  return React.cloneElement(child, {
                                                    timeRemaining_s: timeRemaining_s,
                                                    status: SequenceElementStatus.CRIT_TIME })
                                                } else if(timeRemaining_s < this.props.warnThreshold) {
                                                  return React.cloneElement(child, {
                                                    timeRemaining_s: timeRemaining_s,
                                                    status: SequenceElementStatus.WARN_TIME })
                                                } else if( timeToReduce > 0 || (i === 0 && this.props.elapsedSeconds === 0)) {
                                                  return React.cloneElement(child, {
                                                    timeRemaining_s: timeRemaining_s,
                                                    status: SequenceElementStatus.GOOD_TIME })
                                                } else {
                                                  return React.cloneElement(child, {
                                                    timeRemaining_s: timeRemaining_s,
                                                    status: SequenceElementStatus.INACTIVE })
                                                }
                                               });

    return (
      <div className="SequenceTimeline">
        { updatedChildren }
      </div>
    )
  }
}

SequenceTimeline.propTypes = {
  elapsedSeconds: PropTypes.number,
  warnThreshold: PropTypes.number,
  critThreshold: PropTypes.number,
};

SequenceTimeline.defaultProps = {
  elapsedSeconds: 0,
  warnThreshold: 30,
  critThreshold: 10,
};

export default SequenceTimeline;