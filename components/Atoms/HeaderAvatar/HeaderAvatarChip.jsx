import styled from '@mui/styled-engine';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export default function HeaderAvatar() {
    return (
        <>
            <Chip
                avatar={<Avatar src="/bioImg.jpg" />}
                size="large"
                label="Jace Edwards"
                variant="outlined"
                onClick={() => {}}
            />
        </>
    )
}
