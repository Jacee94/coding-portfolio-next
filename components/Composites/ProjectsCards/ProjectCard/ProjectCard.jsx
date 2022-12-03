import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Box,
} from "@mui/material";
import { projectCardStyles } from "./ProjectCard.styles";
import { StyledButton } from "../../../index";

export default function ProjectCard(props) {
  const {
    project: { name, description, repo_url, deployment_url, screenshot },
    isLoading,
  } = props;
  const classes = projectCardStyles();

  return (
    <Card className={classes.projectCard}>
      <CardContent>
        <Typography className={classes.projectCardTitle} variant={"h4"}>
          {name}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="200" image={screenshot} />
      <CardContent className={classes.projectCardDescription}>
        {description}
      </CardContent>
      <CardActions className={classes.projectCardActions}>
        <Link href={repo_url} rel="noopener" target="_blank">
          <StyledButton variant={"contained"}>Repo Link</StyledButton>
        </Link>
        <Link href={deployment_url} rel="noopener" target="_blank">
          <StyledButton variant={"contained"}>Deployed Url</StyledButton>
        </Link>
      </CardActions>
    </Card>
  );
}