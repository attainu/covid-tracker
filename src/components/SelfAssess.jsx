import React, { Component } from 'react'
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from "reactstrap";
import { connect } from "react-redux";
import { answerupdate, score_update,retake,responses } from "../redux/Action/actionQuiz";
import {Link} from "react-router-dom";

class SelfAssess extends Component {
  state = {
    isOpen: false,
    isclicked:false
  }
    // componentDidUpdate(prevProps, prevState){

    //    if(prevProps.quiz.response!==this.props.response){
    //       console.log("did up")
    //    }
    // }
  render() {
    return (
      <div>
        <div>QUIZ : Please provide correct information </div>
        {this.props.quiz.map((map1, index1) => <Alert color="primary">{index1 + 1}__
    {map1.question} {map1.answers.map((map3, index) => <div><button value={map1.questionId} onClick={(e) => {
          this.props.answerupdate(e.target.value, map3);
          this.props.responses(e.target.value);
        }}>{map3}</button></div>)}
        </Alert>)}


        <div>
          
          <Button onClick={() => {
           
              this.props.score_update();
             
             console.log(this.props.response)
            
           {this.props.response===4?this.setState({ isOpen: true }):alert("Please Answer each question")}
            
          }}>SUBMIT</Button><Button color="primary" onClick={() => 
          this.props.retake()}>Retake</Button>
          <Modal isOpen={this.state.isOpen} toggle="true" >
            <ModalHeader >Result</ModalHeader>
            <ModalBody>
              <div>Your infection risk is
          {this.props.score === 4 ? (<div><Badge color="success">Low</Badge> <div> We recommend that you stay at home to avoid any chance of exposure to the Novel Coronavirus.</div>
                  <br />
                  <div>Retake the Self-Assessment Test if you develop symptoms or come in contact with a COVID-19 confirmed patient.</div></div>) : (this.props.score === 3 ? (<div><Badge color="warning">Medium</Badge><div> We recommend that you stay at home to avoid any chance of exposure to the Novel Coronavirus.</div>
                    <br />
                    <div>Retake the Self-Assessment Test if you develop symptoms or come in contact with a COVID-19 confirmed patient.</div></div>) : <div><Badge color="danger">High</Badge><div>We recommend that you should go to your nearest hospital and get a Covid-19 test</div><div>Maintain distance from other people until you got your test Result</div></div>)}

              </div>
            </ModalBody>
            <ModalFooter>

              <Button color="primary" onClick={() => {this.setState({ isOpen: false });
            this.props.retake()}}>Retake</Button>
             
              <Button color="secondary" onClick={() => {this.setState({ isOpen: false })}}>Cancel</Button>
             
            </ModalFooter>
          </Modal>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    quiz: state.quiz.qBank,
    score: state.quiz.score,
    response:state.quiz.response
  }
}

export default connect(mapStateToProps, { answerupdate, score_update,retake,responses })(SelfAssess);
