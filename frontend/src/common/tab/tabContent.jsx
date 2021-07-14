import React, { Component } from 'react';
import { connect } from 'react-redux';
import If from '../operador/if';


class TabContent extends Component {

    render() {
        const selected = this.props.tab.selected === this.props.id;
        const visible = this.props.tab.visible[this.props.id]; // retorna true caso elemento deva ser exibido

        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab});
//const mapDispathToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps)(TabContent);