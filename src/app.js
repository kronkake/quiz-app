import React from 'react';
import Header from './header';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

export default class App extends React.Component {
    render() {
      console.log(this.props);
        return (
            <div>
                <Header></Header>
                <div className="flex-row">
                    <Paper>
                        <div className="content-center flex-column">
                            <RaisedButton label="Start Quiz" style={{
                                width: "80%",
                                height: 60,
                                marginTop: 10
                            }}/>
                        </div>
                        <Menu className="main-menu">
                            <MenuItem containerElement={<Link to='/' onlyActiveOnIndex/>} primaryText="Setup Quiz"/>
                            <MenuItem containerElement={<Link to='users' />} primaryText="Users"/>
                            <MenuItem containerElement={<Link to='questions' />} primaryText="Questions"/>
                        </Menu>
                    </Paper>
                    <Paper className="wrap" zDepth={2}>
                        {this.props.children}
                    </Paper>
                </div>
            </div>
        );
    }
}
