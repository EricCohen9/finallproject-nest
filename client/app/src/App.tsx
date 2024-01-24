import "symbol-observable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "./pages/Layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Landpage from "./pages/Landpage";
import Buy from "./pages/Buy";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import ArticleDetails from "../src/components/ArticleDetails";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const httpLink = new HttpLink({
  uri: "http://localhost:8200/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:8200/graphql",
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Landpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/card/:id" element={<ArticleDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </AppContainer>
    </>
  );
}

export default App;
