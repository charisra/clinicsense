import React, { Component } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import { connect } from "react-redux";
import { updateCalculation, clearCalculation } from "./actions";

class connectedApp extends Component {
  componentDidUpdate() {
    this.refs.calculation.scrollLeft = 10000;
    this.refs.result.scrollLeft = 10000;
  }
  replaceCharacters(value) {
    value = value.join("");
    value = value.replace(/\//g, '<span class="customOperator">÷</span>');
    value = value.replace(/\*/g, '<span class="customOperator">×</span>');
    value = value.replace(/\+/g, '<span class="customOperator">+</span>');
    value = value.replace(/-/g, '<span class="customOperator">-</span>');
    return value;
  }
  render() {
    return (
      <div className="calculator-container">
        <div className="result-container">
          <div
            ref="calculation"
            className="calculation-display"
            dangerouslySetInnerHTML={{
              __html: this.props.calculation.length
                ? this.replaceCharacters(this.props.calculation)
                : 0
            }}
          />
          <div className="result-display" ref="result">
            {this.props.result}
          </div>
        </div>

        <button
          className="btn-clear"
          onClick={() => this.props.clearCalculation()}
        >
          Clear
        </button>
        <div className="row">
          <CustomButton value={7} />
          <CustomButton value={8} />
          <CustomButton value={9} />
          <CustomButton value="/" htmlCode="247" additionalClass="operator" />
        </div>

        <div className="row">
          <CustomButton value={4} />
          <CustomButton value={5} />
          <CustomButton value={6} />
          <CustomButton value="*" htmlCode="215" additionalClass="operator" />
        </div>
        <div className="row">
          <CustomButton value={1} />
          <CustomButton value={2} />
          <CustomButton value={3} />
          <CustomButton value="-" htmlCode="8722" additionalClass="operator" />
        </div>
        <div className="row">
          <CustomButton value={0} additionalClass="zero" />
          <CustomButton value="+" htmlCode="43" additionalClass="operator" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCalculation: (inputValue, currentState, currentResult) =>
    dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = state => {
  return {
    calculation: state.calculation,
    result: state.result
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedApp);

export default App;
