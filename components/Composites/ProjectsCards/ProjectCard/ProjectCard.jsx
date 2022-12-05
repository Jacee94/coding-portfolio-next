import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Skeleton,
  Fade,
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
        {isLoading ? (
          <Skeleton height={24} sx={{ bgcolor: "#516475" }}></Skeleton>
        ) : (
          <Fade in={true}>
            <Typography className={classes.projectCardTitle} variant={"h4"}>
              {name}
            </Typography>
          </Fade>
        )}
      </CardContent>
      {isLoading ? (
        <Skeleton
          height={200}
          variant="rectangular"
          sx={{ bgcolor: "#516475" }}
        ></Skeleton>
      ) : (
        <Fade in={true}>
          <CardMedia
            component="img"
            height="200"
            image={!isLoading && screenshot}
          />
        </Fade>
      )}
      <CardContent className={classes.projectCardDescription}>
        {isLoading ? (
          <>
            <Skeleton sx={{ bgcolor: "#516475" }} />
            <Skeleton sx={{ bgcolor: "#516475" }} />
            <Skeleton sx={{ bgcolor: "#516475" }} />
            <Skeleton sx={{ bgcolor: "#516475" }} />
            <Skeleton sx={{ bgcolor: "#516475" }} />
            <Skeleton width="60%" sx={{ bgcolor: "#516475" }} />
          </>
        ) : (
          <Fade in={true}>
            <Box>{description}</Box>
          </Fade>
        )}
      </CardContent>
      <CardActions className={classes.projectCardActions}>
        {isLoading ? (
          <Skeleton
            width={98}
            height={36}
            variant="rectangle"
            sx={{ bgcolor: "#516475" }}
          />
        ) : (
          <Fade in={true}>
            <Link href={!isLoading && repo_url} rel="noopener" target="_blank">
              <StyledButton variant={"contained"}>Repo Link</StyledButton>
            </Link>
          </Fade>
        )}
        {isLoading ? (
          <Skeleton
            width={125}
            height={36}
            variant="rectangle"
            sx={{ bgcolor: "#516475" }}
          />
        ) : (
          <Fade in={true}>
            <Link
              href={!isLoading && deployment_url}
              rel="noopener"
              target="_blank"
            >
              <StyledButton variant={"contained"}>Deployed Url</StyledButton>
            </Link>
          </Fade>
        )}
      </CardActions>
    </Card>
  );
}

ProjectCard.defaultProps = {
  project: {
    name: null,
    description: null,
    repo_url: null,
    deployment_url: null,
    screenshot: null,
  },
};
