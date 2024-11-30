import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Sidebar } from './components/index'

library.add(fas)

export default class App extends React.Component {
	render() {
		return <Sidebar color='light' />
	}
}
