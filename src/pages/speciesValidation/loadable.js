import React, { Component } from "react";
import Loadable from "react-loadable";

const SpecieValidation = Loadable({
  loader: () => import("./index"),
  loading() {
    return <div>Loading...</div>;
  },
  timeout: 10000 // 10 seconds
});
export default class LoadableSpeciesValidation extends Component {
  render() {
    return <SpecieValidation/>
  }
}
