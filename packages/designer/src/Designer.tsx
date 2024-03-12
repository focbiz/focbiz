import React from 'react'
import { MainPanel, ContentPanel, Header, TabPanel, ComponentTree, SettingForm } from './view/components';

export const Designer = () => {
    alert(11)
    return (
        <MainPanel>
            <Header />
            <ContentPanel>
                <TabPanel />
                <ComponentTree />
                <SettingForm />
            </ContentPanel>
        </MainPanel>
    )
}