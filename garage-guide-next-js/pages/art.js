import React from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class art extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                  <h1>This is the art page.</h1>
                </BasePage>
            </BaseLayout>
        )
    }
} 
export default art;