// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { Tabs, Tab } from '@material-ui/core';
// import icon from '../../assets/mistletoe.PNG'

// function ScrollToTop() {
//     window.scrollTo({top: 0, behavior:'smooth'});
// }

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   }
// });

// export default function SwipeableTemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//             <Tabs centered style={{marginTop: '0'}} className="navbar">
//                 <Tab value={0} label="Home" to="/" onClick={ScrollToTop} component={Link} />
//                 <Tab value={1} label="About" to="/#about" smooth component={NavHashLink}/>
//                 <Tab value={2} label="Register" to="/#register" smooth component={NavHashLink}/>
//                 <Tab value={3} label="Schedule" to="/#schedule" smooth component={NavHashLink}/>
//                 <Tab value={4} label="Sponsors" to="/#sponsors" smooth component={NavHashLink}/>
//             </Tabs>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//         <img src={icon} alt='navbar icon' style={{marginTop: '20px'}}/>
//       <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
//       <SwipeableDrawer
//         anchor="right"
//         open={state.right}
//         onClose={toggleDrawer('right', false)}
//         onOpen={toggleDrawer('right', true)}
//       >
//         {sideList('right')}
//       </SwipeableDrawer>
//     </div>
//   );
// }