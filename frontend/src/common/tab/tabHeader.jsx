import React, { Component } from 'react';

export default class TabHeader extends Component {

    render() {
        return (
            <li>
                {/* O comando javascript:; ignora qualquer click do botão */}
                <a href="javascript:;" data-toggle="tab" data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}