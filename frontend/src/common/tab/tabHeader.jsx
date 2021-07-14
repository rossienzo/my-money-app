import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './tabActions';

class TabHeader extends Component {

    componentDidMount() {
        this.props.selectTab;
    }

    render() {

        const selected = this.props.tab.selected === this.props.target

        return (
            <li className={selected ? 'active' : ''}>
                {/* O comando javascript:; ignora qualquer click do botão */}
                <a href="javascript:;" 
                   data-toggle="tab" 
                   data-target={this.props.target}
                   onClick={() => this.props.selectTab(this.props.target)}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab}); // pega o estado do reduer tab em reducers.js
const mapDispathToProps = dispatch => bindActionCreators({selectTab}, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(TabHeader);