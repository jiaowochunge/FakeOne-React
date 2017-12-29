import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import IconNavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import IconCommunicationCallMade from 'material-ui/svg-icons/communication/call-made'
import IconActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import IconCommunicationComment from 'material-ui/svg-icons/communication/comment'
import IconActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'

import config from 'app/config'

export default class EssayContent extends React.Component {

  xhttp

  state = {
    loadingStatus: 'ready',
    data: null
  }

  render() {
    return (
      <div className={css(style.page)}>
        <RefreshIndicator
          size={50}
          left={window.innerWidth / 2 - 25}
          top={window.innerHeight / 2 - 25}
          loadingColor="#FF9800"
          status={this.state.loadingStatus}
        />
        <AppBar
          title="ONE·MUSIC"
          iconElementLeft={<IconButton><IconNavigationArrowBack /></IconButton>}
          onLeftIconButtonClick={this.props.history.goBack}
          iconElementRight={<IconButton><IconCommunicationCallMade /></IconButton>}
          onRightIconButtonClick={() => console.log('repost')}
        />
        {
          this.state.data == null ? null : (
            <div className={css(style.content)}>
              <Card containerStyle={{margin: '-8px'}}>
                <CardMedia
                  overlay={<CardTitle title={this.state.data.title} subtitle={this.state.data.info} />}
                >
                  <img src={this.state.data.cover} alt="" />
                </CardMedia>
              </Card>
              <h2>{this.state.data.story_title}</h2>
              <p>{this.state.data.hp_author}</p>
              <div dangerouslySetInnerHTML={{__html: this.state.data.story}}>
              </div>
              <p>{this.state.data.hp_author_introduce}</p>
              <p>{this.state.data.copyright}</p>
            </div>
          )
        }
        <Toolbar className={css(style.toolbar)}>
          <ToolbarGroup firstChild={true}>
            <IconButton><IconActionFavoriteBorder /></IconButton>
            <IconButton><IconActionBookmarkBorder /></IconButton>
            <IconButton><IconCommunicationComment /></IconButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text={this.state.data ? `${this.state.data.praisenum}喜欢·${this.state.data.commentnum}评论` : ''} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  componentDidMount() {
    const _this = this

    this.xhttp = new XMLHttpRequest()
    this.xhttp.onreadystatechange = function() {
      if (this.readyState == 0 || this.readyState == 1) {
        _this.setState({
          loadingStatus: 'ready'
        })
      } else if (this.readyState == 2 || this.readyState == 3) {
        _this.setState({
          loadingStatus: 'loading'
        })
      } else {
        if (this.status == 200) {
          _this.receiveResponse(this.responseText)
        } else {
          console.error(this.statusText)
        }
        _this.setState({
          loadingStatus: 'hide'
        })
      }
    }
    this.xhttp.open('GET', `${config.HOST}music/detail/${this.props.match.params.id}`, true)
    this.xhttp.send()
  }

  receiveResponse(resp) {
    try {
      const response = JSON.parse(resp)
      if (response.res == 0) {
        this.setState({
          data: response.data
        })
      } else {
        console.error(response.msg)
      }
    } catch (e) {
      console.error(e)
    } finally {

    }
  }

}

const style = StyleSheet.create({
  page: {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
    textAlign: 'center'
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    padding: '64px 8px 56px 8px',
    boxSizing: 'border-box',
    overflow: 'scroll'
  },
  toolbar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%'
  }
})
