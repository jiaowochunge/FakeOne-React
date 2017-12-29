import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import IconActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import IconCommunicationCallMade from 'material-ui/svg-icons/communication/call-made'

import musicData from 'assets/json/music.json'

export default class Music extends React.Component {

  render() {
    return (
      <div {...this.props}>
      {
        musicData.data.map((data, index) => (
          <Paper key={index} zDepth={2} style={{paddingBottom: 8}}>
            <Link to={`/music/${data.item_id}`}>
              <Card>
                <CardHeader
                  title={data.title}
                  subtitle={`${data.author.user_name} ${data.subtitle}`}
                />
                <div style={{textAlign: 'center'}}>
                  <Avatar
                    src={data.img_url}
                    size={window.innerWidth * 0.4}
                  />
                </div>
                <CardText>
                  {data.forward}
                </CardText>
                <CardActions>
                  <label>{data.post_date.substring(0, 10)}</label>
                  <FlatButton label={data.like_count} labelPosition="before" icon={<IconActionFavoriteBorder />} />
                  <FlatButton icon={<IconCommunicationCallMade />} />
                </CardActions>
              </Card>
            </Link>
          </Paper>
        ))
      }
      </div>
    )
  }
}
