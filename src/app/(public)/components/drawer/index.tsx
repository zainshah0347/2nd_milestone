// 'use client'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// interface DrawerProps {
//     open : boolean
//     toggleDrawer :(newOpen: boolean)=>void
// }
// export default function RightDrawer({toggleDrawer,open}:DrawerProps) {
//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer open={open} onClose={()=>toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }
'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface DrawerProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
  children: React.ReactNode;
}

const RightDrawer: React.FC<DrawerProps> = ({ open, toggleDrawer, children }) => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <Box
        component="div"
        sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* Close Button */}
        <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end', m: 1 }}>
          <CloseIcon />
        </IconButton>

        {/* Drawer Content (e.g., Navigation Links) */}
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </Drawer>
  );
};

export default RightDrawer;
