import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, Grid, Card, Label, Image } from 'semantic-ui-react';
import CreatePagination from './CreatePagination.jsx';
import CreateJobCard from './CreateJobCard.jsx';


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
                <section className="page-body">
                    <div className="ui container">
                        <div className="ui container">
                            <h3>List of Jobs</h3>
                            <div className="ui horizontal segments">
                                <div className="ui segment">
                                    <p >  <Icon className="filter" />Filter: Choose filter<Icon className='dropdown' /></p>
                                </div>
                                <div className="ui segment">
                                    <p > <Icon className=" calendar alternate " />Sort by date: Newest first<Icon className='dropdown' /></p>
                                </div>
                            </div>

                            <div className="ui three column grid">
                                    <CreateJobCard />
                                
                                
                            </div>
                            <div className=" ui center aligned grid">
                                <CreatePagination />
                            </div>
                            <div className=" ui grid">
                                <div className="row" />
                            </div> 
                        </div>
                    </div>
                </section>
            </BodyWrapper>

        );
    }
}       
