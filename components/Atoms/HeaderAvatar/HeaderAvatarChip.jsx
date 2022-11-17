import { BaseChip } from './HeaderAvatarChip.styles';
import Avatar from '@mui/material/Avatar';

export default function HeaderAvatar() {
    return (
        <>
            <BaseChip
                avatar={<Avatar src="/bioImg.jpg" />}
                size="large"
                label="Jace Edwards"
                onClick={() => {}}
            />
        </>
    )
}
