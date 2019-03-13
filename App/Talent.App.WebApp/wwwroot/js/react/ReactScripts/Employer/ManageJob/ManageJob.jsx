import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, Grid, Card, Label, Image } from 'semantic-ui-react';


export default class ManageJob extends React.Component {
    constructor(props) {
        super(props);
        let loader = loaderData
        loader.allowedUsers.push("Employer");
        loader.allowedUsers.push("Recruiter");
        console.log(loader)
        this.state = {
            loadJobs: [],
            loaderData: loader,
            sortBy: {
                date: "desc"
            },
            filter: {
                showActive: true,
                showClosed: false,
                showDraft: true,
                showExpired: true,
                showUnexpired: true
            },
            totalPages: 1,
            activeIndex: ""
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        //your functions go here
    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this

        //set loaderData.isLoading to false after getting data
        //this.loadData(() =>
        //    this.setState({ loaderData })
        //)

        //console.log(this.state.loaderData)
    }

    componentDidMount() {
        this.init();
    };

    loadData(callback) {
        var link = 'http://localhost:51689/listing/listing/getSortedEmployerJobs';
        var cookies = Cookies.get('talentAuthToken');
        // your ajax call and other logic goes here
    }

    loadNewData(data) {
        var loader = this.state.loaderData;
        loader.isLoading = true;
        data[loaderData] = loader;
        this.setState(data, () => {
            this.loadData(() => {
                loader.isLoading = false;
                this.setState({
                    loadData: loader
                })
            })
        });
    }

    render() {
        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <div className="ui container">
                    <h3>List of Jobs</h3>
                    <div class="ui horizontal segments">
                        <div class="ui segment">
                            <p >  <Icon className="filter" />Filter: Choose filter<Icon className='dropdown' /></p>
                        </div>
                        <div class="ui segment">
                            <p > <Icon className=" calendar alternate " />Sort by date: Newest first<Icon className='dropdown' /></p>
                        </div>
                    </div>

                    <div class="ui three column grid">
                        <div class="column">
                            <div class="ui raised segment">
                                <a class="ui blue right ribbon label">Community</a>
                                <span>Job Title</span>
                                <div class="ui cards">
                                    <div class="content">
                                        <div class="header">Addres:s</div>
                                        <div class="description">Description: Steve wants to add you to the group <strong>best friends</strong>
                                        </div>
                                    </div>
                                    <div class="extra content ui buttons">

                                        <div class="ui left floated tiny buttons">
                                            <button class="ui column red button ">Expired</button>
                                        </div>
                                        <span class="column"></span>
                                        <div class="ui tiny right floated buttons">
                                            <button class="ui blue basic button "><i className="red ban icon" />lose</button>
                                            <button class="ui blue basic button "><i class="edit icon" />Edit</button>
                                            <button class="ui blue basic button "><i className="copy icon" />copy</button>
                                        </div>

                                    </div>

                                </div>


                            </div>

                            <div class=" ui center aligned grid">
                                <div aria-label="Pagination Navigation" role="navigation" class="ui pagination menu  ">
                                    <a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="First item" type="firstItem" class="item">«</a>
                                    <a aria-current="false" aria-disabled="false" tabindex="0" value="4" aria-label="Previous item" type="prevItem" class="item">⟨</a>
                                    <a aria-current="false" aria-disabled="false" tabindex="0" value="1" type="pageItem" class="item">1</a>
                                    <a aria-current="false" aria-disabled="false" tabindex="0" value="6" aria-label="Next item" type="nextItem" class="item">⟩</a>
                                    <a aria-current="false" aria-disabled="false" tabindex="0" value="10" aria-label="Last item" type="lastItem" class="item">»</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </BodyWrapper>

        );
    }
}       
