import React, { Component } from 'react'
import { connect } from "react-redux";
import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col,Badge,ListGroup,ListGroupItem } from 'reactstrap';
import numeral from "numeral";

class MoreInfo extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "10px" }}>
                <Row >
                    <Col sm='6' style={{width:"100%",height:"100%"}}>
                        
                            <img src={this.props.flag} alt="Card image cap" />

                        
                    </Col>
                    <Col>
                        <Card inverse>

                            <Card style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                                <CardTitle>{this.props.currentCountry.continent === undefined ? <div>Worldwide</div> : <div>Continent :{this.props.currentCountry.continent}</div>}</CardTitle>
                                <CardTitle>{this.props.currentCountry.country === undefined ? <div></div> : <div>Country :{this.props.currentCountry.country}</div>}</CardTitle>
                                <CardTitle>Population :{numeral(this.props.currentCountry.population).format("0,0")}</CardTitle>

                            </Card>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col sm="4">
                        <Card body inverse color="warning" style={{ fontSize: "30px", fontFamily: "monospace", fontWeight: "bold", height: "100%" }}>
                            <CardTitle>Active</CardTitle>
                            <CardTitle>{numeral(this.props.currentCountry.active).format("0,0")}</CardTitle>


                        </Card>
                    </Col >
                    <Col sm="4">
                        <Card body inverse color="danger" style={{ fontSize: "30px", fontFamily: "monospace", fontWeight: "bold", height: "100%" }}>
                            <CardTitle>Critical</CardTitle>
                            <CardTitle>{numeral(this.props.currentCountry.critical).format("0,0")}</CardTitle>


                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card body inverse color="secondary">
                            <PieChart
                                data={[
                                    { title: 'One', value: this.props.currentCountry.active, color: '#ffc107' },
                                    { title: 'Two', value: this.props.currentCountry.critical, color: '#C13C37' },

                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <h3>Test's data</h3>
                    <ListGroup>
                        <ListGroupItem className="justify-content-between">Total Tests Done : <Badge pill>{numeral(this.props.currentCountry.tests).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Test Per 1 Million (test/1 M) : <Badge pill>{numeral(this.props.currentCountry.testsPerOneMillion).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Test Per 1 People (test/people) : <Badge pill>{numeral(this.props.currentCountry.oneTestPerPeople).format("0,0")}</Badge></ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col sm="6">
                    <h3>Per People data</h3>
                    <ListGroup>
                        <ListGroupItem className="justify-content-between">One Tests Per People (1 test/people): <Badge pill>{numeral(this.props.currentCountry.oneTestPerPeople).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">One Case Per People (1 case/people): <Badge pill>{numeral(this.props.currentCountry.oneCasePerPeople).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">One Death Per People (1 death/people): <Badge pill>{numeral(this.props.currentCountry.oneDeathPerPeople).format("0,0")}</Badge></ListGroupItem>
                    </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                    <h3>Per Million data</h3>
                    <ListGroup>
                        <ListGroupItem className="justify-content-between"> Cases Per Million ( case/million): <Badge pill color="info">{numeral(this.props.currentCountry.casesPerOneMillion).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"> Recovered Per Million ( recovered/million): <Badge pill color="success">{numeral(this.props.currentCountry.recoveredPerOneMillion).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"> Active Per Million ( active/million): <Badge pill color="warning">{numeral(this.props.currentCountry.activePerOneMillion).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"> Critical Per Million ( Critical/million): <Badge pill color="danger">{numeral(this.props.currentCountry.criticalPerOneMillion).format("0,0")}</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"> Death Per Million ( death/million): <Badge pill color="dark">{numeral(this.props.currentCountry.deathsPerOneMillion).format("0,0")}</Badge></ListGroupItem>
                    </ListGroup> 
                    </Col>
                    <Col sm="6">
                    <h3>PieChart for Per Million Data</h3>
                    <Card body inverse color="secondary" style={{height:"100%"}}>
                    
                            <PieChart
                                data={[
                                    { title: 'One', value: this.props.currentCountry.casesPerOneMillion, color: '#007bff' },
                                    { title: 'Two', value: this.props.currentCountry.recoveredPerOneMillion, color: '#28a745' },
                                    { title: 'Three', value: this.props.currentCountry.activePerOneMillion, color: '#ffc107' },
                                    { title: 'four', value: this.props.currentCountry.criticalPerOneMillion, color: '#dc3545' },
                                    { title: 'five', value: this.props.currentCountry.deathsPerOneMillion, color: '#343a40' },

                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store.countrydata.continent)
    return {
        general: store.countrydata,
        currentCountry: store.countrydata.currentCountry,
        flag: store.countrydata.flag
    }
}

export default connect(mapStateToProps)(MoreInfo);