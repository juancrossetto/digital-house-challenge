import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import QuestionnairePage from "./pages/Questionnaire/QuestionnairePage";
import ConfigPage from "./pages/Config/ConfigPage";
import FormPage from "./pages/FormPage/FormPage";
import HistoryPage from "./pages/History/HistoryPage";
import HistoryDetailPage from "./pages/HistoryDetailPage/HistoryDetailPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={ConfigPage} path="/config" />
        <Route exact component={FormPage} path="/form" />
        <Route exact component={FormPage} path="/form/:id" />
        <Route exact component={HistoryPage} path="/history" />
        <Route exact component={HistoryDetailPage} path="/history/:id" />
        <Route exact component={QuestionnairePage} path="/questionaire/:id" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
