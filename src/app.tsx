import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { routes } from './routes'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://212.129.144.48:1337/graphql',
  cache: new InMemoryCache()
})
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

const App = (props: any) => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}>
                {props.children}
              </RouteWithSubRoutes>
            ))}
          </Switch>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default App
