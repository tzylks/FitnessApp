import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
  
  const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
          margin: '0',
          padding: 0,
          listStyle: 'none',
        },
      },
    footer: {
      height: "30vh",
      margin: 'auto',
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(1),
     
    },
  }));

  const footers = [
    {
      title: 'Company',
      description: ['Team', 'Contact us'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    }
  ];

function Footer() {
    const classes = useStyles();
 
    return(
    <div style={{background: 'linear-gradient(329deg, #D62AD0 25%, #78DEC7 24% )', borderTop: `5px solid #FEC260`}}>
      <Container maxWidth="sm" component="footer" className={classes.footer} >
        <Grid container spacing={6} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} md={3} key={footer.title}>
              <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li  key={item}>
                    <Link href="#" variant="subtitle1" style={{color: 'black'}}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          
        </Grid>
      </Container>
      </div>
    )
}

export default Footer