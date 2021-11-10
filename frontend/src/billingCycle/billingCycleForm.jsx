import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from 'redux-form';

import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";
import { init } from './billingActions';

class BillingCycleForm extends Component
{
    
    calculateSummary() 
    {
        const sum = (t, v) => t + v

        return {
            //o + converte a string para numérico
            // o reduce transforma o array em um único valor utilizando a soma
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }

    render()
    {
        
        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form role="form" action="" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly} label="Nome"
                        cols="12 4" placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name="month" component={labelAndInput} readOnly={readOnly} label="Mês"
                        cols="12 4" placeholder="Informe o mês" readOnly={readOnly} />
                    <Field name="year" component={labelAndInput} readOnly={readOnly} label="Ano"
                        cols="12 4" placeholder="Informe o ano" readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList cols="12 6" list={credits} readOnly={readOnly}
                        field="credits" legend="Créditos"/>
                    <ItemList cols="12 6" list={debts} readOnly={readOnly}
                        field="debts" legend="Débitos" showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm',  destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({credits: selector(state, 'credits'), 
                                   debts: selector(state, 'debts')});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
