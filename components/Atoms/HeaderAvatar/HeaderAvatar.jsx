import { BaseChip } from './HeaderAvatar.styles';
import Avatar from '@mui/material/Avatar';
import headerAvatarStyles from './HeaderAvatar.styles';

export default function HeaderAvatar() {
    const classes = headerAvatarStyles();

    return (
        <>
           <Avatar className={classes.headerAvatar} src='/bioImg.jpg' />
        </>
    )
}
