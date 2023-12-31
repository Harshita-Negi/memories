// import {makeStyles} from "@mui/styles"

// export default makeStyles((theme)=>({
//         mainContainer: {
//           display: 'flex',
//           alignItems: 'center',
//         },
//         smMargin: {
//           margin: theme.spacing(1),
//         },
//         actionDiv: {
//           textAlign: 'center',
//         },

// }))

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  // [theme.breakpoints.down("sm")] : {
  //   smallContainer : {
  //     display : "block"
  //   }
  // }
}));