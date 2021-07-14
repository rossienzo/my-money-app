/* envia a tab Selecionada */
export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true); // coloca cada elemento dentro de tabsToShow com valor true
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}