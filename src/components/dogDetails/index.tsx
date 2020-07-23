import * as React from 'react';
import Pagination from "./paginate";
import {TableDetails} from "./table"
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';


const styles = (theme: any) => ({
  theme: {
    background: "#1b262c",
    height: "700px",
    paddingBottom: "50px"
  },
  image:{
    borderRadius: "25px",
    width: "100%",
    height: "100%",
    
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  tableGrid:{
    padding: "20px 30px 40px 30px",
  },
  paginateGrid:{
    padding: "0px 30px 40px 30px",
  },
  details:{
    marginTop: "10px",
    borderRadius:"25px"
  }
});

class DogTable extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state={
      posts: [],
      currentPage:1,
      postPerPage:5
    }
    
  }

  componentDidMount(){
    this.setState({posts:this.props.location.state.dogTinderArray})
  }

  redirectToMain = () => {
		let temp = this.props;
		let pathToRedirect = "/dog-tinder"
		temp.history.push({
			pathname: pathToRedirect,
		})
  }

  paginate = (pageNumber:number) => {this.setState({currentPage:pageNumber})};

  render() {
    const { classes } = this.props;
    const {posts,currentPage,postPerPage} = this.state
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            <Grid container className={classes.theme}>
            <Grid item lg={2} sm={12}/>
            <Grid item lg={8} sm={12}>
              <Grid item lg={12} sm={12} className={classes.tableGrid}>
                <TableDetails posts={currentPosts}/>
              </Grid>
              <Grid item lg={12} sm={12} className={classes.paginateGrid}>
                 <Pagination
                   postsPerPage={postPerPage}
                   totalPosts={posts.length}
                   paginate={this.paginate}
                 /> 
              </Grid>
              <Grid item alignItems="center" lg={12} sm={12} className={classes.paginateGrid}>
                    <Button variant="contained" color="secondary" className={classes.details}  onClick= {this.redirectToMain}>
                         Back to Main
                    </Button>
              </Grid>
              
            </Grid>
            <Grid item lg={2} sm={12}/>
            </Grid>

        </React.Fragment>
    );
  }
}

export default (withStyles(styles)(withRouter(DogTable)));
