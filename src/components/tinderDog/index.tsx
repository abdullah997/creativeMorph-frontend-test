import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../state';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { withRouter } from "react-router-dom";
const {GetRandomDog, AddInfo} = tinderAction;
import CheckIcon from '@material-ui/icons/Check';
import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';
import { bindActionCreators, Dispatch } from 'redux';
import {RandomDog} from "../../state/animalTinder/types";
import { withStyles } from '@material-ui/core/styles';
import tinderAction from "../../state/animalTinder/actions"
import CircularProgress from '@material-ui/core/CircularProgress';
 
const styles = (theme: any) => ({
  theme: {
    background: "#1b262c",
    height: "100%",
    paddingBottom: "50px"
  },
  image:{
    borderRadius: "25px",
    width: "100%",
    height: "100%",
    
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  imgGrid:{
    padding: "20px 30px 40px 30px",
    width:"50px",
    height:"500px"
  },
  likeButton:{
    background: "#96bb5c",
    borderRadius: "50px",
    boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "&:hover":{
      background: "#96bb7c",
    }
  },
  dislikeButton:{
    background: "#cf1b1b",
    borderRadius: "50px",
    boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "&:hover":{
      background: "#900d0d",
    }
  },
  Icon:{
    color:"white",
    fontSize: "60px",
    
  },
  details:{
    marginTop: "10px",
    borderRadius:"25px"
  },
  circular:{
    margin: "300px 30px 300px 30px"
  }
});


class AnimalTinder extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        loader:this.props.dogTinder.loader,
        randomArray:this.props.dogTinder.randomDogArray,
    };
  }
  componentDidMount(){
      this.props.getRandomDog();
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    return {
      loader: nextProps.dogTinder.loader,
      randomArray: nextProps.dogTinder.randomDogArray,
      dogTinderArray: nextProps.dogTinder.dogTinderArray 
    };
  }
 handleInformation = ()=>{
    this.props.getRandomDog();
  }

 redirectToDetails = () => {
		let temp = this.props;
		console.log("Click on Email Receipt")
		let pathToRedirect = "/view-detail"
		temp.history.push({
			pathname: pathToRedirect,
			state: {
				dogTinderArray: this.state.dogTinderArray,
			}
		})
}

  render() {
    const { classes } = this.props;
    const {loader, randomArray,dogTinderArray} = this.state;
    return (
        <React.Fragment>
            <Grid container className={classes.theme}>
            <Grid item lg={2} sm={12}/>
            <Grid item lg={8} sm={12}>
                {loader && <CircularProgress className={classes.circular}/>}
                {!loader && randomArray.length>0 && randomArray.map((item: RandomDog)  =>(
                  <Grid container key={item.message}>
                      <Grid sm={12} className={classes.imgGrid}>
                      <img src = {item.message} className={classes.image}></img>
                  </Grid>  
                  <Grid sm={6}>
                  <Tooltip title="Like">
                     <Button  className={classes.likeButton} onClick= {()=>{this.props.addInformation(item.message, true), this.handleInformation()}}>
                     <CheckIcon fontSize = "large" className={classes.Icon}/>
                     </Button>
                     </Tooltip>
                  </Grid>
                  <Grid sm={6}>
                  <Tooltip title="Dislike">
                     <Button className={classes.dislikeButton} onClick= {()=>{this.props.addInformation(item.message, false), this.handleInformation()}}>
                         <ClearIcon className={classes.Icon}/>
                     </Button>
                  </Tooltip>
                  </Grid>
                  </Grid>
                ))}
            </Grid>
            <Grid item lg={2} sm={12}/>
            
            { loader === false && dogTinderArray.length>0 ? 
                      <Grid item sm={12}>
                         <Button variant="contained" color="secondary" className={classes.details}  onClick= {this.redirectToDetails}>
                                View Results
                          </Button>
                        </Grid> : '' 
            }
            </Grid>

        </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    getRandomDog: bindActionCreators(GetRandomDog, dispatch),
    addInformation: bindActionCreators(AddInfo, dispatch),
  };
};

const mapStateToProps = (state: AppState): any => {
  return {
    dogTinder: state.dogTinder,
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(AnimalTinder)));
