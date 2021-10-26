import "./App.css";
import React from "react"
import Stopwatch from "./components/Stopwatch"
import SequenceTimeline from "./components/SequenceTimeline"
import SequenceElement from "./components/SequenceElement"

class App extends React.Component {
  state = {time_ms : 0}

  updateTime_ms = (newTime_ms) => {
    this.setState({time_ms: newTime_ms});
  }

  render() {
    return (
      <body>
        <div className="App App-body">
          <Stopwatch onChange={this.updateTime_ms}/>
          <SequenceTimeline elapsedSeconds={Math.floor(this.state.time_ms/1000)}>
            <SequenceElement name="Introductions"
                             totalTime_s={120}/>
            <SequenceElement name="Project Presentation"
                             totalTime_s={300}/>
            <SequenceElement name="Project Q&A"
                             totalTime_s={300}/>
            <SequenceElement name="Robot Design Presentation"
                             totalTime_s={300}/>
            <SequenceElement name="Robot Design Q&A"
                             totalTime_s={300}/>
            <SequenceElement name="Core Values Q&A"
                             totalTime_s={180}/>
            <SequenceElement name="Team Feedback"
                             totalTime_s={300}/>
          </SequenceTimeline>
        </div>
      </body>
    );
  }
}

export default App;
