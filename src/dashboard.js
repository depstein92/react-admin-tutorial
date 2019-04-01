import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';

const styleSheet = {
  title: {
    textAlign: 'center',
    fontSize: '3rem'
  },
  description: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: 'sans-serif'
  }
};

const LandingComponent = props => {
  const { title, description } = props.classes;
  return(
    <Card>
      <CardHeader title="Welcome to my Tutorial" className={title} />
      <CardContent className={description}>
         Lorem ipsum sic dolor amet...
      </CardContent>
    </Card>
  );
};

const LandingComponentStyled = withStyles(styleSheet)(LandingComponent);

export default LandingComponentStyled;
