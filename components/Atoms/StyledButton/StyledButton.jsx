import { Button } from '@mui/material';

export default function StyledButton(props) {
    const { children, ...rest } = props

    return (<Button {...rest}>{children}</Button>)
}