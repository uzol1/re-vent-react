import React, { useState } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from '../Menus/SignedInMenu'
import SignedOutMenu from '../Menus/SignedOutMenu'

const NavBar = (props) => {
    const [authenticated, setAuthenticated] = useState(false)
    const handleSignIn = () => setAuthenticated(true)
    const handleSignOut = () => {
        setAuthenticated(false)
        props.history.push('/')
    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to="/" exact header>
                    <img src="assets/logo.png" alt="logo" />
                    Re-vents
                </Menu.Item>

                <Menu.Item as={NavLink} to="/events" name='Events' />
                <Menu.Item as={NavLink} to="/people" name='People' />

                <Menu.Item >
                    <Button
                        as={Link}
                        to='/createEvent'
                        floated="right"
                        positive
                        inverted
                        content="CreateEvent"
                    />
                </Menu.Item>
                {authenticated ? (
                    <SignedInMenu handleSignOut={handleSignOut} />
                ) : (
                    <SignedOutMenu handleSignIn={handleSignIn} />
                )}

            </Container>
        </Menu >
    )
}

export default withRouter(NavBar)
