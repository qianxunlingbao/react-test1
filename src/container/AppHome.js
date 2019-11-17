import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'chartreuse',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >住吧家居</NavBar>
            </div>
        )
    }
}