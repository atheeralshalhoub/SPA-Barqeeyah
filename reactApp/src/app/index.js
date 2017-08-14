import React from "react"
import { render } from "react-dom";
import { browserHistory } from "react-router" ;
import { BrowserRouter as Router, Route } from 'react-router-dom' ;

import { Home } from "./components/Home" ;
import {About} from "./components/About" ;
import { Services } from "./components/Services" ;
import { SignUp } from "./components/SignUp" ;
import { SignIn } from "./components/SignIn" ;
import { TermsOfServices} from "./components/TermsOfServices" ;
import { PrivacyPolicy} from "./components/PrivacyPolicy" ;
import { ControlPanel } from "./components/ControlPanel" ;
import { Header } from "./components/Header" ;
import { Footer } from "./components/Footer" ;


class App extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <div>
                    <Root>
                        <switch>
                            <Index exact path = "/" component={Home} />
                            <Route path = "/about" component={About} />
                            <Route path = "/services" component={Services} />
                            <Route path = "/signup" component={SignUp}>
                                <Route path = "/termsofservices" component={TermsOfServices} />
                                <Route path = "/privacyploicy" component={PrivacyPolicy} />
                            </Route>
                            <Route path = "/signin" component={SignIn} />
                            <Route path = "/cpanel" component={ControlPanel} />
                        </switch>
                    </Root>
                </div>
            </Router>

        )
    }
}

render(<App/>,window.document.getElementById("app"));