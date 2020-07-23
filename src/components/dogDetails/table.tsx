import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TinderDog} from "../../state/animalTinder/types"

interface tableProps {
    posts:TinderDog[],
}

export const TableDetails: React.FunctionComponent<tableProps> = (props) => {
  
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Image</b></TableCell>
            <TableCell><b>Image Link</b></TableCell>
            <TableCell ><b>Reaction</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.posts.map((row: TinderDog) => (
            <TableRow key={row.photoLink}>
              <TableCell component="th" scope="row">
                <img src={row.photoLink} width="30px"/>
              </TableCell>
              <TableCell>{row.photoLink}</TableCell>
              <TableCell>{row.LikedorDisLiked === true ?  <FavoriteIcon color="secondary"/> : <FavoriteBorderIcon color="secondary"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
