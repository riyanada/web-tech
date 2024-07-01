import React from 'react';

const Dashboard = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                            <div className="inner">
                                <h3> 150 </h3>
                                <p> New Orders </p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag" />
                            </div>
                            <a className="small-box-footer" href="#"> More info{' '} <i className="fas fa-arrow-circle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success">
                            <div className="inner">
                                <h3> 53 <sup style={{
                                    fontSize: '20px'
                                }}> % </sup>
                                </h3>
                                <p> Bounce Rate </p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars" />
                            </div>
                            <a className="small-box-footer" href="#"> More info{' '} <i className="fas fa-arrow-circle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                            <div className="inner">
                                <h3> 44 </h3>
                                <p> User Registrations </p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add" />
                            </div>
                            <a className="small-box-footer" href="#"> More info{' '} <i className="fas fa-arrow-circle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <h3> 65 </h3>
                                <p> Unique Visitors </p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-pie-graph" />
                            </div>
                            <a className="small-box-footer" href="#"> More info{' '} <i className="fas fa-arrow-circle-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <section className="col-lg-7 connectedSortable">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-chart-pie mr-1" /> Sales
                                </h3>
                                <div className="card-tools">
                                    <ul className="nav nav-pills ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#revenue-chart"> Area </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#sales-chart"> Donut </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="tab-content p-0">
                                    <div className="chart tab-pane active" id="revenue-chart" style={{
                                        height: '300px',
                                        position: 'relative'
                                    }}>
                                        <canvas height="300" id="revenue-chart-canvas" style={{
                                            height: '300px'
                                        }} />
                                    </div>
                                    <div className="chart tab-pane" id="sales-chart" style={{
                                        height: '300px',
                                        position: 'relative'
                                    }}>
                                        <canvas height="300" id="sales-chart-canvas" style={{
                                            height: '300px'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card direct-chat direct-chat-primary">
                            <div className="card-header">
                                <h3 className="card-title"> Direct Chat </h3>
                                <div className="card-tools">
                                    <span className="badge badge-primary" title="3 New Messages"> 3 </span>
                                    <button className="btn btn-tool" data-card-widget="collapse" type="button">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button className="btn btn-tool" data-widget="chat-pane-toggle" title="Contacts" type="button">
                                        <i className="fas fa-comments" />
                                    </button>
                                    <button className="btn btn-tool" data-card-widget="remove" type="button">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="direct-chat-messages">
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-left"> Alexander Pierce </span>
                                            <span className="direct-chat-timestamp float-right"> 23 Jan 2:00 pm </span>
                                        </div>
                                        <img alt="message user image" className="direct-chat-img" src="dist/img/user1-128x128.jpg" />
                                        <div className="direct-chat-text"> Is this template really for free? That's unbelievable! </div>
                                    </div>
                                    <div className="direct-chat-msg right">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-right"> Sarah Bullock </span>
                                            <span className="direct-chat-timestamp float-left"> 23 Jan 2:05 pm </span>
                                        </div>
                                        <img alt="message user image" className="direct-chat-img" src="dist/img/user3-128x128.jpg" />
                                        <div className="direct-chat-text"> You better believe it! </div>
                                    </div>
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-left"> Alexander Pierce </span>
                                            <span className="direct-chat-timestamp float-right"> 23 Jan 5:37 pm </span>
                                        </div>
                                        <img alt="message user image" className="direct-chat-img" src="dist/img/user1-128x128.jpg" />
                                        <div className="direct-chat-text"> Working with AdminLTE on a great new app! Wanna join? </div>
                                    </div>
                                    <div className="direct-chat-msg right">
                                        <div className="direct-chat-infos clearfix">
                                            <span className="direct-chat-name float-right"> Sarah Bullock </span>
                                            <span className="direct-chat-timestamp float-left"> 23 Jan 6:10 pm </span>
                                        </div>
                                        <img alt="message user image" className="direct-chat-img" src="dist/img/user3-128x128.jpg" />
                                        <div className="direct-chat-text"> I would love to. </div>
                                    </div>
                                </div>
                                <div className="direct-chat-contacts">
                                    <ul className="contacts-list">
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> Count Dracula <small className="contacts-list-date float-right"> 2/28/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> How have you been? I was... </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> Sarah Doe <small className="contacts-list-date float-right"> 2/23/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> I will be waiting for... </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> Nadia Jolie <small className="contacts-list-date float-right"> 2/20/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> I'll call you back at... </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> Nora S. Vans <small className="contacts-list-date float-right"> 2/10/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> Where is your new... </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> John K. <small className="contacts-list-date float-right"> 1/27/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> Can I take a look at... </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img alt="User Avatar" className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                                                <div className="contacts-list-info">
                                                    <span className="contacts-list-name"> Kenneth M. <small className="contacts-list-date float-right"> 1/4/2015 </small>
                                                    </span>
                                                    <span className="contacts-list-msg"> Never mind I found... </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <form action="#" method="post">
                                    <div className="input-group">
                                        <input className="form-control" name="message" placeholder="Type Message ..." type="text" />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button"> Send </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="ion ion-clipboard mr-1" /> To Do List
                                </h3>
                                <div className="card-tools">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item">
                                            <a className="page-link" href="#"> « </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> 1 </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> 2 </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> 3 </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> » </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="todo-list" data-widget="todo-list">
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultValue="" id="todoCheck1" name="todo1" type="checkbox" />
                                            <label htmlFor="todoCheck1" />
                                        </div>
                                        <span className="text"> Design a nice theme </span>
                                        <small className="badge badge-danger">
                                            <i className="far fa-clock" /> {' '}2 mins </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultChecked defaultValue="" id="todoCheck2" name="todo2" type="checkbox" />
                                            <label htmlFor="todoCheck2" />
                                        </div>
                                        <span className="text"> Make the theme responsive </span>
                                        <small className="badge badge-info">
                                            <i className="far fa-clock" /> {' '}4 hours </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultValue="" id="todoCheck3" name="todo3" type="checkbox" />
                                            <label htmlFor="todoCheck3" />
                                        </div>
                                        <span className="text"> Let theme shine like a star </span>
                                        <small className="badge badge-warning">
                                            <i className="far fa-clock" /> {' '}1 day </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultValue="" id="todoCheck4" name="todo4" type="checkbox" />
                                            <label htmlFor="todoCheck4" />
                                        </div>
                                        <span className="text"> Let theme shine like a star </span>
                                        <small className="badge badge-success">
                                            <i className="far fa-clock" /> {' '}3 days </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultValue="" id="todoCheck5" name="todo5" type="checkbox" />
                                            <label htmlFor="todoCheck5" />
                                        </div>
                                        <span className="text"> Check your messages and notifications </span>
                                        <small className="badge badge-primary">
                                            <i className="far fa-clock" /> {' '}1 week </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v" />
                                            <i className="fas fa-ellipsis-v" />
                                        </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input defaultValue="" id="todoCheck6" name="todo6" type="checkbox" />
                                            <label htmlFor="todoCheck6" />
                                        </div>
                                        <span className="text"> Let theme shine like a star </span>
                                        <small className="badge badge-secondary">
                                            <i className="far fa-clock" /> {' '}1 month </small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer clearfix">
                                <button className="btn btn-primary float-right" type="button">
                                    <i className="fas fa-plus" /> {' '}Add item </button>
                            </div>
                        </div>
                    </section>
                    <section className="col-lg-5 connectedSortable">
                        <div className="card bg-gradient-primary">
                            <div className="card-header border-0">
                                <h3 className="card-title">
                                    <i className="fas fa-map-marker-alt mr-1" /> Visitors
                                </h3>
                                <div className="card-tools">
                                    <button className="btn btn-primary btn-sm daterange" title="Date range" type="button">
                                        <i className="far fa-calendar-alt" />
                                    </button>
                                    <button className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse" type="button">
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="world-map" style={{
                                    height: '250px',
                                    width: '100%'
                                }} />
                            </div>
                            <div className="card-footer bg-transparent">
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <div id="sparkline-1" />
                                        <div className="text-white"> Visitors </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div id="sparkline-2" />
                                        <div className="text-white"> Online </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div id="sparkline-3" />
                                        <div className="text-white"> Sales </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gradient-info">
                            <div className="card-header border-0">
                                <h3 className="card-title">
                                    <i className="fas fa-th mr-1" /> Sales Graph
                                </h3>
                                <div className="card-tools">
                                    <button className="btn bg-info btn-sm" data-card-widget="collapse" type="button">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button className="btn bg-info btn-sm" data-card-widget="remove" type="button">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <canvas className="chart" id="line-chart" style={{
                                    height: '250px',
                                    maxHeight: '250px',
                                    maxWidth: '100%',
                                    minHeight: '250px'
                                }} />
                            </div>
                            <div className="card-footer bg-transparent">
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <input className="knob" data-fgcolor="#39CCCC" data-height="60" data-readonly="true" data-width="60" defaultValue="20" type="text" />
                                        <div className="text-white"> Mail-Orders </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <input className="knob" data-fgcolor="#39CCCC" data-height="60" data-readonly="true" data-width="60" defaultValue="50" type="text" />
                                        <div className="text-white"> Online </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <input className="knob" data-fgcolor="#39CCCC" data-height="60" data-readonly="true" data-width="60" defaultValue="30" type="text" />
                                        <div className="text-white"> In-Store </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gradient-success">
                            <div className="card-header border-0">
                                <h3 className="card-title">
                                    <i className="far fa-calendar-alt" /> Calendar
                                </h3>
                                <div className="card-tools">
                                    <div className="btn-group">
                                        <button className="btn btn-success btn-sm dropdown-toggle" data-offset="-52" data-toggle="dropdown" type="button">
                                            <i className="fas fa-bars" />
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#"> Add new event </a>
                                            <a className="dropdown-item" href="#"> Clear events </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#"> View calendar </a>
                                        </div>
                                    </div>
                                    <button className="btn btn-success btn-sm" data-card-widget="collapse" type="button">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button className="btn btn-success btn-sm" data-card-widget="remove" type="button">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div id="calendar" style={{
                                    width: '100%'
                                }} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
