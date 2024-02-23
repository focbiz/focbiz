import React from 'react'
import { MainPanel, ContentPanel, Header, TabPanel, ComponentTree, SettingForm } from './view/components';

export const Designer = () => {
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