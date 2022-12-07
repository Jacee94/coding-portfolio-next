import { useState } from "react";
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
import { useEffect } from "react";

export default function ProjectCard(props) {
  const {
    project: { name, description, repo_url, deployment_url, screenshot },
    isLoading,
  } = props;

  const classes = projectCardStyles();

  const [imageLoading, setImageLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setImageLoading(false);
    setTimeout(() => {
      setShowImage(true);
    }, 250);
  };

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
        <CardContent className={classes.projectCardImage}>
          <Fade in={imageLoading} timeout={{ appear: 0, exit: 200 }}>
            <Box>
              <Skeleton
                height={200}
                variant="rectangular"
                sx={{
                  bgcolor: "#516475",
                  display: !showImage ? "block" : "none",
                }}
              />
            </Box>
          </Fade>
          <Fade in={showImage}>
            <img
              src={screenshot}
              style={{ display: showImage ? "block" : "none" }}
              onLoad={handleShowImage}
            />
          </Fade>
        </CardContent>
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
