import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class GoogleMap extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                   <h1>This is the Google map page.</h1>
                </BasePage>
            </BaseLayout>
        )
    }
} 

export default GoogleMap;