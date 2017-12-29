import React  from 'react'
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
    tabIndex: 1,
    selectedIndex: 0
  }

  render() {
    return (
      <div>
        <Tabs
          value={this.state.tabIndex}
          onChange={this.onTabChange}
        >
          <Tab icon={<IconContentSend />} value={0} >
            <Daily />
          </Tab>
          <Tab icon={<IconCommunicationImportContacts />} value={1} >
            <Reading style={{position: 'fixed', width: '100vw', height: '100vh', overflow: 'scroll'}} />
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
