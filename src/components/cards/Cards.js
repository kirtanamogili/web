import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

  
export default function SimpleCard() {
  
    return (
    <div>
      <Card className="root">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            Personal Project
          </Typography>
          <Typography variant="h5" component="h2">
            Book Exchange
          </Typography>
          <Typography className="pos" color="textSecondary">
            May 2021 - Present
          </Typography>
          <Typography variant="body2" component="p">
            Created a React-Native application that allows students to trade books with others locally. Integrated with MongoDB to store user data.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://github.com/kirtanamogili/bookExchange" target="_blank" size="small">Learn More</Button>
        </CardActions>
      </Card>
      
      <Card className="root">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          HackGT 7
        </Typography>
        <Typography variant="h5" component="h2">
          NiteLite
        </Typography>
        <Typography className="pos" color="textSecondary">
          Oct 2020 - Present
        </Typography>
        <Typography variant="body2" component="p">
          Integrated Azure Vision with the Google Maps API to create a machine learning model that identifies street lamps in StreetView images.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.com/nevingilbert/NiteLite" target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className="root">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Vertically Integrated Project
        </Typography>
        <Typography variant="h5" component="h2">
          Empathy Bytes
        </Typography>
        <Typography className="pos" color="textSecondary">
          Jan 2021 - May 2021
        </Typography>
        <Typography variant="body2" component="p">
            Employed immersive AR/VR technologies into a Swift application for users to experience the various cultures of Georgia Tech.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="http://educast.library.gatech.edu/" target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className="root">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          CS2340 Objects and Design
        </Typography>
        <Typography variant="h5" component="h2">
          Green Thumb
        </Typography>
        <Typography className="pos" color="textSecondary">
          Aug 2020 - Dec 2020
        </Typography>
        <Typography variant="body2" component="p">
            Created an interactive Farm game that allows players to plant seeds, water plants, and harvest fruit using JavaScript.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.gatech.edu/aghosh74/Farm" target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className="root">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Personal Project
        </Typography>
        <Typography variant="h5" component="h2">
          My Website
        </Typography>
        <Typography className="pos" color="textSecondary">
          Aug 2021 - Present
        </Typography>
        <Typography variant="body2" component="p">
          This website.
          <br/>
          <br/>
          <br/>
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.com/kirtanamogili/web" target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    );
  }
