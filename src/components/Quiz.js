import React from 'react';
import axios from 'axios';

class Question extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            answer : '',
            right : false,
            answered : false
        };

        this.handleAnswerInput = this.handleAnswerInput.bind(this);
    };

    handleAnswerInput(e) {
        if (!this.state.answer){
            let right = false;
            if (e.target.value == this.props.question.correct_answer){
                right = true;
            }
            this.props.handleOnChoice(right);

            this.setState({
                answer : e.target.value,
                right : right,
                answered : true
            });
        }
        else{
            e.preventDefault();
        }
    };

    render(){
        let wrong_ans = this.props.question.incorrect_answers.map((ans,index) => (
                <label key={ans + index} >
                    <input
                        type="radio"
                        name={this.props.question.correct_answer}
                        onClick={this.handleAnswerInput}
                        value={ans} />
                    {ans}
                </label>
            ));

        let status = "question";
        if (this.state.answer){
            if (this.state.right){
                status += " question--right";
            }
            else {
                status += " question--wrong";
            }
        }

        return (
            <div className={status}>
                <p>{this.props.question.question}</p>
                <label>
                    <input
                        type="radio"
                        name={this.props.question.correct_answer}
                        onClick={this.handleAnswerInput}
                        value={this.props.question.correct_answer} />
                    {this.props.question.correct_answer}
                </label>
                { wrong_ans }
            </div>
        );
    };
};

class Trivia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quests: [],
            loaded: false,
            requestFailed: false,
            timer : 0,
            answered : 0,
            right_answer : 0,
            startTime : Date.now(),
            finish : false
        };

        this.handleChoice = this.handleChoice.bind(this);
    };

    handleChoice(right){
        let finish = false,
            timer = 0;
        if (this.state.answered+1 == this.props.amount){
            finish = true;
            timer = Date.now() - this.state.startTime;
        }

        let right_answer = this.state.right_answer;
        if (right){
            right_answer = right_answer + 1;
        }

        this.setState({
            timer,
            finish,
            right_answer: right_answer,
            answered : this.state.answered + 1,
        });
    }

    componentWillReceiveProps(nextProps) {
        const url = `https://opentdb.com/api.php?amount=${this.props.amount}`;
        axios.get(url)
            .then(res => {
                    if (res.data.response_code == 0){
                        let quests = res.data.results.map((obj,index) => <Question handleOnChoice={this.handleChoice} key={obj.correct_answer} question={obj} />);
                        this.setState({
                            loaded : true,
                            quests : quests,
                            requestFailed : false,
                            timer : 0,
                            answered: 0,
                            right_answer: 0,
                            startTime : Date.now(),
                            finish : false,
                        });
                    }
                    else{
                        this.setState({
                            loaded : false,
                            requestFailed : true
                        });   
                    }
                },
                (e) => {
                    this.setState({
                        loaded : false,
                        requestFailed : true
                    })
                }
            );
    };

    render() {
        if (this.props.started){
            if (this.state.requestFailed) {
                return <div className="quiz-body"><div className="quiz__data"><p>Sorry, request was failed</p></div></div>;
            }
            else if (!this.state.loaded) {
                return <div className="quiz-body"><div className="quiz__data"><p>Loading...</p></div></div>;
            }
            else {
                return (
                    <div className="quiz-body">
                        <div className="quiz__data">
                            <h1>Answer for next questions, please:</h1>
                            <div className="quiz__list">
                                { this.state.quests }
                            </div>
                        </div>
                        <Result
                            amount={this.props.amount}
                            finished={this.state.finish}
                            timer={this.state.timer}
                            answered={this.state.right_answer}
                        />
                    </div>
                );
            }
        }
        else{
            return <div className="quiz-body"><div className="quiz__data"><h1>Push the button</h1></div></div>;
        }
    };
};

class Result extends React.Component{
    render(){
        if (this.props.finished){
            return (
                <div className="results">
                    <h1>Your results</h1>
                    <p className="timer">Time : {this.props.timer/1000} sec</p>
                    <p className="statistic">Right answers : {this.props.answered} / {this.props.amount}</p>
                </div>
            )
        }
        else {
            return <div className="results"></div>
        }
    }
}

class Quiz extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            amount : 3, // if player would like to increse/decrease the difficult in the some potential input
            start : false,
            buttonText: "Start Quiz"
        };

        this.startQuiz = this.startQuiz.bind(this);
    }

    startQuiz(e){
        this.setState({
            start: true,
            buttonText: "Play again"
        });
    }

	render(){
		return (
            <div className="body-page">
    			<div className="App-header">
                    <h2>Ready for a quiz?</h2>
                </div>
                <div className="container">
                    <div className="inputs">
                        <button onClick={this.startQuiz} className="startQuiz">{this.state.buttonText}</button>
                    </div>
                    <Trivia
                        amount={this.state.amount}
                        started={this.state.start}
                    />
                </div>
            </div>
		);
	};
};

export default Quiz;