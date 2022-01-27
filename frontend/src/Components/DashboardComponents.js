import * as React from 'react';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import HotelIcon from '@mui/icons-material/Hotel';
// import { red } from '@mui/material/colors';



// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Dashboard() {
  return (
    < Box sx={{ flexGrow: 1, paddingLeft: '170px', }} >
<Grid   rowSpacing={2}>
      <Grid item
        container
        Spacing={1}
        sx={{ paddingLeft: '80px' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, }}
        
      >
        <Grid  item xs={3} >

          <Card sx={{ maxWidth: 250,  maxHeight: 300 ,backgroundColor: "lightgreen" }}>

            <CardContent>

              <Typography variant="h5" component="div">
                total beds
              </Typography>
              <Typography variant="h6" color="text. primary">
                103
              </Typography>
            </CardContent>

          </Card>

        </Grid>
        <Grid item xs={3}>

          <Card sx={{ maxWidth: 250,maxHeight: 300,backgroundColor: "lightgreen"  }}>
            <CardContent>
              <Typography variant="h5" component="div">
                available beds
              </Typography>
              <Typography variant="h6" color="text. primary">
                107
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid  item  xs={3}  >

          <Card sx={{ maxWidth: 250,maxHeight: 300  ,backgroundColor: "lightgreen" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                due payments
              </Typography>
              <Typography variant="h6" color="text. primary">
                109
              </Typography>
            </CardContent>

          </Card>


        </Grid >
        <Grid item xs={3}  >

          <Card sx={{ maxWidth: 250,maxHeight: 300, backgroundColor: "lightgreen" }}>

            <CardContent  >
              <Typography variant="h5" component="div">
                received payments
              </Typography>
              <Typography variant="h6" color="text. primary">
                90
              </Typography>
            </CardContent>

          </Card>

        </Grid>
        <Grid
        container item
        Spacing={1}
        sx={{ paddingLeft: '80px' ,paddingTop:'50px'  }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, }}
        
      >
        <Grid  item xs={3}    >
          <Card sx={{ maxWidth: 250,maxHeight: 300 ,backgroundColor: "lightgreen"  }}>
            <CardContent>
              <Typography variant="h5" component="div">
                No Of Check Ins 
              </Typography>
              <Typography variant="h6" color="text. primary">
                100
              </Typography>
            </CardContent>

          </Card>


        </Grid>
        <Grid item xs={3}  >

          <Card sx={{ maxWidth: 250,  height: '50',backgroundColor: "lightgreen"  }}>
            <CardContent>
              <Typography variant="h5" component="div">
                No Of Check Outs
              </Typography>
              <Typography variant="h6" color="text.primary">
                100
              </Typography>
            </CardContent>

          </Card>
          </Grid>
          
        </Grid>
      </Grid>
      </Grid>
    </Box>
  );
}