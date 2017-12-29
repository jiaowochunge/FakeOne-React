import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import IconActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import IconCommunicationCallMade from 'material-ui/svg-icons/communication/call-made'

import readingData from 'assets/json/reading.json'

export default class Reading extends React.Component {

  render() {
    return (
      <div {...this.props}>
      {
        readingData.data.map((data, index) => (
          <Paper key={index} zDepth={2} style={{paddingBottom: 8}}>
            <Link to={`/essay/${data.item_id}`}>
              <Card>
                <CardHeader
                  title={data.title}
                  subtitle={`文／${data.author.user_name}`}
                />
                <CardMedia overlay={<CardTitle subtitle={data.forward} />}>
                  <img src={data.img_url} alt="" />
                </CardMedia>
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
