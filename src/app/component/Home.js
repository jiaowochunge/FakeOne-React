import React  from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import IconContentSend from 'material-ui/svg-icons/content/send'
import IconCommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts'
import IconAVMusicVideo from 'material-ui/svg-icons/AV/music-video'
import IconAVVideoLibrary from 'material-ui/svg-icons/AV/video-library'

import Daily from 'app/component/Daily'
import Reading from 'app/component/Reading'
import Music from 'app/component/Music'
import Movie from 'app/component/Movie'

export default class Home extends React.Component {

  state = {
    tabIndex: 0
  }

  render() {
    return (
      <div className={css(style.page)}>
        <Tabs
          value={this.state.tabIndex}
          onChange={this.onTabChange}
          contentContainerClassName={css(style.tab)}
        >
          <Tab icon={<IconContentSend />} value={0} >
            <Daily />
          </Tab>
          <Tab icon={<IconCommunicationImportContacts />} value={1} >
            <Reading />
          </Tab>
          <Tab icon={<IconAVMusicVideo />} value={2} >
            <Music />
          </Tab>
          <Tab icon={<IconAVVideoLibrary />} value={3} >
            <Movie />
          </Tab>
        </Tabs>
      </div>
    )
  }

  onTabChange = (value) => {
    this.setState({
      tabIndex: value
    })
  }
}


const style = StyleSheet.create({
  page: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw'
  },
  tab: {
    height: 'calc(100vh - 48px)',
    width: '100%',
    overflow: 'scroll'
  }
})
