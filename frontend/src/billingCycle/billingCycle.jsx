import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeaders';
import TabHeader from '../common/tab/tabHeader';
import TabsContent from '../common/tab/tabsContent';
import TabContent from '../common/tab/tabContent';
import { selectTab, showTabs } from '../common/tab/tabActions';
import { create } from './billingActions';
import Form from './billingCycleForm';

import BillingCycleList from './billingCycleList';

class BillingCycle extends Component {

    componentDidMount() {
        this.props.selectTab('tabList'); // inicia a pagina com a tabList aberta
        this.props.showTabs('tabList', 'tabCreate'); // define as tabs que devem ser exibidas
    }

    render() {
        return (
            <div>
                <ContentHeader title="Cilos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList id='tabList'/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <h1>Alterar</h1>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispathToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch);
export default connect(mapStateToProps, mapDispathToProps)(BillingCycle);