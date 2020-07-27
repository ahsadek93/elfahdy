import React, { Component } from "react";
import { ReactMic } from "react-mic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import HeaderNav from "../components/HeaderNav";
import AppFooter from "../components/AppFooter";

class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      voice: null,
    };
  }

  toggleRecording = () => {
    if (this.state.record) {
      this.setState({
        record: !this.state.record,
      });
    } else {
      this.setState({
        record: !this.state.record,
      });
    }
  };

  onStop = (recordedBlob) => {
    this.setState({
      voice: recordedBlob.blobURL,
    });
  };

  render() {
    return (
      <div className="quizzes">
        <HeaderNav />
        <div className="headerMargin"></div>
        <div className="container-fluid mt-5 questionContainer">
          <div className="row justify-content-center">
            <div className="col-11">
              <h3 className="text-primary mt-5 mb-3">Chemistry Homework</h3>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <h5>What is the first element in the periodic table?</h5>
                  <div className="form-check">
                    <div className="col-12 mt-4 px-4 custom-control custom-radio">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        id="exampleRadios1"
                        value="option1"
                      ></input>
                      <label className="form-check-label" for="exampleRadios1">
                        Carbon
                      </label>
                    </div>
                    <div className="col-12 mt-4 px-4 custom-control custom-radio">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        id="exampleRadios2"
                        value="option2"
                      ></input>
                      <label className="form-check-label" for="exampleRadios1">
                        Hydrogen
                      </label>
                    </div>
                    <div className="col-12 mt-4 px-4 custom-control custom-radio">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        id="exampleRadios3"
                        value="option3"
                      ></input>
                      <label className="form-check-label" for="exampleRadios1">
                        Sodium Hydoxide
                      </label>
                    </div>
                    <div className="col-12 mt-4 px-4 custom-control custom-radio">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        id="exampleRadios4"
                        value="option4"
                      ></input>
                      <label className="form-check-label" for="exampleRadios1">
                        Nitrogen
                      </label>
                    </div>
                    <div className="col-12 mt-4 px-4 custom-control custom-radio">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        id="exampleRadios5"
                        value="option5"
                      ></input>
                      <label className="form-check-label" for="exampleRadios1">
                        H2O
                      </label>
                    </div>
                    <div className="col-12 mt-4 px-1">
                      <span
                        className="text-primary"
                        onClick={this.toggleRecording}
                        type="button"
                      >
                        <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
                      </span>
                      <span className="px-2">Say the answer by voice</span>
                    </div>
                  </div>
                  <div className="col-10">
                    <ReactMic
                      record={this.state.record}
                      className="sound-wave w-100"
                      onStop={this.onStop}
                      onData={this.onData}
                      strokeColor="#C19D5D"
                      backgroundColor="#ffffff"
                      visualSetting="frequencyBars"
                    />
                  </div>
                  <div className="col-10 p-0 m-0">
                    <audio controls src={this.state.voice} />
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-12 text-center">
                      <span className="mx-2 text-muted" >
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                      </span>
                      <span className="mx-2 active">1</span>
                      <span className="mx-2">2</span>
                      <span className="mx-2">3</span>
                      <span className="mx-2">4</span>
                      <span className="mx-2">5</span>
                      <span className="mx-2">6</span>
                      <span className="mx-2 text-primary">
                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-10 col-md-6 my-5 my-md-0">
                  <h5 className="text-muted">No feedback yet</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AppFooter />
      </div>
    );
  }
}

export default Quizzes;
