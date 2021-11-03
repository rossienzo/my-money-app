import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSummary, getUser } from './dashboardActions';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary();
        this.props.getUser();
    }

    render() {
      
        const { credit, debt } = this.props.summary; // destructuring
        //const { name, last } = this.props.user; // destructuring
      
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de débitos"/>
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor consolidado"/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary, user: state.dashboard.user});
const mapDispatchToProps = dispach => bindActionCreators({getSummary, getUser}, dispach);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); // Retorna o Dashboard integrado ao estado