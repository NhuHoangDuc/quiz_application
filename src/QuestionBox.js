import React from "react";
import { connect } from "react-redux";
import Question from "./QuestionBank";
import "./index.css";
import Timer from './Timer'
import shuffleArray from './shufflefunction'


class QuestionBox extends React.Component {
  state={
    minutes:3,
    seconds:0,
    ansOrder:[0,1,2,3]
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state

        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.myInterval)
}
  showResult = () => {
    this.setState({minutes:3,seconds:0})
    this.props.dispatch({ type: "showAndSaveScore" });
  };
  handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      this.props.dispatch({ type: "computeScore" });
    }
    if (this.props.count < 10) {
      this.props.dispatch({ type: "nextQuestion" });
      this.setState({ansOrder:[1,2,3,0]});
     
    } else {
      this.setState({minutes:3,seconds:0})
      this.props.dispatch({ type: "showAndSaveScore" });
      
    }
  };
  resetQuiz = () => {
    this.props.dispatch({ type: "reset" });
    this.setState({ansOrder:[1,2,3,0]});
  };

  
  

  render() {
    return (
      <div className="app">
        {this.props.showScore ? (
          <div className="score-section">
            You scored {this.props.score} out of 10 questions
            <button
              style={{
                fontSize: "20px",
                width: "100px",
                backgroundColor: "#ff6666",
                borderColor: "#80ffff",
                marginLeft: "15px"
              }}
              onClick={this.resetQuiz}
            >
              Play again
            </button>
          </div>
        ) : (
          <>
            
            <h4 className="question-title">
              Question {this.props.count} of 10
            </h4>
            <div className="timer">
              <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
            </div>
            <div className="question-section">
              <div className="question-text">
                {
                  Question[this.props.questionList[this.props.count]]
                    .questionText
                }
              </div>
            </div>
            
            <div className="answer-section">
              
                
                <button
                  onClick={() => this.handleOptionClick(Question[this.props.questionList[this.props.count]].answerOptions[this.state.ansOrder[0]].isCorrect)}>
                  {(Question[this.props.questionList[this.props.count]].answerOptions)[this.state.ansOrder[0]].answerText}
                </button>
                <button
                  onClick={() => this.handleOptionClick(Question[this.props.questionList[this.props.count]].answerOptions[this.state.ansOrder[1]].isCorrect)}>
                  {(Question[this.props.questionList[this.props.count]].answerOptions)[this.state.ansOrder[1]].answerText}
                </button>
                <button
                  onClick={() => this.handleOptionClick(Question[this.props.questionList[this.props.count]].answerOptions[this.state.ansOrder[2]].isCorrect)}>
                  {(Question[this.props.questionList[this.props.count]].answerOptions)[this.state.ansOrder[2]].answerText}
                </button>
                <button
                  onClick={() => this.handleOptionClick(Question[this.props.questionList[this.props.count]].answerOptions[this.state.ansOrder[3]].isCorrect)}>
                  {(Question[this.props.questionList[this.props.count]].answerOptions)[this.state.ansOrder[3]].answerText}
                </button>
                </div>

            <button
              style={{ backgroundColor: "rgba(102,153,153,0.8)" }}
              onClick={this.showResult}
            >
              Finish your Quiz
            </button>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    score: state.score,
    scoreList: state.scoreList,
 
    showScore: state.showScore,
    questionList: state.questionList
  };
}

export default connect(mapStateToProps)(QuestionBox);
