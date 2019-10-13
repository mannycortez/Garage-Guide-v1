import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class SignIn extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                  <h1>This is the Sign In page.</h1>
                </BasePage>
            </BaseLayout>
        )
    }
} 
export default SignIn;