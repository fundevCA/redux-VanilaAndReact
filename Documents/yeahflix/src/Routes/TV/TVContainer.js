import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airToday: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airToday }
      } = await tvApi.airToday();

      this.setState({ topRated, popular, airToday });
    } catch {
      this.setState({
        error: "Can't find TV information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { topRated, popular, airToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airToday={airToday}
        error={error}
        loading={loading}
      />
    );
  }
}
