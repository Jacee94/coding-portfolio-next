import { Box, Typography, Card, CardMedia, CardContent, CardActions, Link } from '@mui/material';
import { projectCardStyles } from './ProjectCard.styles';
import { StyledButton } from '../../../index';

export default function ProjectCard(props) {
    const { project: {name, description, repo_url}} = props;
    const classes = projectCardStyles();

    return (
        <Card className={classes.projectCard}>
            <CardContent>
                <Typography className={classes.projectCardTitle} variant={'h4'}>{name}</Typography>
            </CardContent>
            <CardMedia>
            
            </CardMedia>
            <CardContent className={classes.projectCardDescription}>
                {description}
            </CardContent>
            <CardActions>
                <Link href={repo_url} rel="noopener" target="_blank">
                    <StyledButton variant={'contained'}>
                        Repo Link
                    </StyledButton>
                </Link>
            </CardActions>
        </Card>
    )
}