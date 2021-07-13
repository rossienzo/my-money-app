import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value="2000.00" text="Total de créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value="143.20" text="Total de débitos"/>
                        <ValueBox cols="12 4" color="blue" icon="money" value="930.01" text="Valor consolidado"/>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard;