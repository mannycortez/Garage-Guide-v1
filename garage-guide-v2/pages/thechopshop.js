import React from 'react'
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class theChopShop extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>I am the Chop Shop page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
} 

export default theChopShop;