import React from 'react' ;
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import Splash from '../components /splash/splash'
import SignInContainer from './session/signin_container';
import FindEmailContainer from './findemail/find_email_container'
import EventFormContainer from '../components /events/event_form_container'
import EventIndexContainer from '../components /events/event_index_container'
import EventShowContainer from '../components /events/event_show/event_show_container'
import EventRegContainer from '../components /events/event_reg_form_container'
import {Route} from 'react-router-dom' ;
import { AuthRoute, ProtectedRoute } from '../util /route.util';

export default () => ( 
    <div>

        <Route path='/' component={NavBarContainer}  />
        <Route exact path='/' component={Splash}  />
        <Route exact path ='/' component={EventIndexContainer}/>
        {/* <AuthRoute path='/signup' component={SignUpContainer} /> */}
        <Route exact path='/signin' component={FindEmailContainer}/>
        <Route exact path='/events/:id' component={EventShowContainer}/>
        <AuthRoute path='/signin/login' component={SignInContainer} />
        <AuthRoute path='/signin/signup' component={SignUpContainer} />
        <ProtectedRoute path='/create_event' component={EventFormContainer} /> 
        <ProtectedRoute path='/user_events' component={EventRegContainer} />
    </div>
)


