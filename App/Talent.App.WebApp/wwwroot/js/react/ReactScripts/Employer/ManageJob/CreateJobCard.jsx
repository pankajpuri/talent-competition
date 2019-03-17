import React from 'react';

const CreateJobCard = () => {

    return (
        <div className="ui grid">
            
            <div className="six wide column">
                <div className="ui raised segment ">
                    <h1>Test Analyst</h1>
                    <a className="ui black right ribbon label "><i className="m-2 user icon" />0</a>

                    <div className="ui cards">

                        <div className="content">
                            <div className=" ui grid">
                                <div className="row">
                                    <div className="ui  wide column">
                                        <p> Auckland, NewZealand</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="ui  wide column">
                                        <p>We have a position for a Test Analyst.</p>
                                    </div>
                                </div>
                                <div className="row" />
                                <div className="row" />
                                <div className="row" />
                                <div className="row" />
                                <div className="row">
                                    <div className="ui three wide column">
                                        <div className="ui left floated tiny buttons">
                                            <button className="ui column red button ">Expired</button>
                                        </div>
                                    </div>

                                    <div className="ui thirteen wide column">
                                        <div className="ui tiny right floated buttons">
                                            <button className="ui blue basic button "><i className="red ban icon" />close</button>
                                            <button className="ui blue basic button "><i className="edit icon" />Edit</button>
                                            <button className="ui blue basic button "><i className="copy icon" />copy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>



            <div className="six wide column">
                <div className="ui raised segment ">
                    <h1>Software Developer</h1>
                    <a className="ui black right ribbon label "><i className="m-2 user icon" />0</a>

                    <div className="ui cards">

                        <div className="content">
                            <div className=" ui grid">
                                <div className="row">
                                    <div className="ui  wide column">
                                        <p>Auckland, NewZealand</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="ui  wide column">
                                        <p>we have a position for a Software Developer.</p>
                                    </div>
                                </div>
                                <div className="row" />
                                <div className="row" />
                                <div className="row" />
                                <div className="row" />
                                <div className="row">
                                    <div className="ui three wide column">
                                        <div className="ui left floated tiny buttons">
                                            <button className="ui column red button ">Expired</button>
                                        </div>
                                    </div>

                                    <div className="ui thirteen wide column">
                                        <div className="ui tiny right floated buttons">
                                            <button className="ui blue basic button "><i className="red ban icon" />close</button>
                                            <button className="ui blue basic button "><i className="edit icon" />Edit</button>
                                            <button className="ui blue basic button "><i className="copy icon" />copy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
    );
};



export default CreateJobCard;


