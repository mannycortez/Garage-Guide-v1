import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                  <h1>About</h1>
                   <p> This is an app by Patrick Flanagan.  Designed and developed by Manny Cortez Studios LLC.  This project makes use of the MERN stack along with Next.js framework and hosted with Firebase.
                   </p>
                </BasePage>
             </BaseLayout>
        )
    }
} 
export default About;



