import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Shell from './components/Shell'

import 'elemental/less/elemental.less'

//axios.defaults.baseURL = "http://whotargetsme"
axios.defaults.baseURL = "https://who-targets-me.herokuapp.com"

//axios.defaults.headers.common['access-token'] = 'efd09e98baac5cd126e827cb008039e82fc21caa8cd26a810759fb2e0f38b6ff';
axios.defaults.headers.common['access-token'] = '283b2da7e6ae3df6312792fd25369768ffc5f42581f6102ac56a62916f1740ec';

ReactDOM.render(
  <Shell/>,
  document.getElementById('root')
);
