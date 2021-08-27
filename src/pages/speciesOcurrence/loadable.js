import React, { Component } from "react";
import Loadable from "react-loadable";

const SpeciesOcurrence = Loadable({
  loader: () => import("./index"),
  loading() {
    return <div>Loading...</div>;
  },
  timeout: 10000 // 10 seconds
});
export default class LoadableSpeciesOcurrence extends Component {
  render() {
    return <SpeciesOcurrence/>
  }
}
