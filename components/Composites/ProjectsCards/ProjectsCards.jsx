import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectCardsStyles } from "./ProjectsCards.styles";
import { useEffect, useState } from "react";

export default function ProjectsCards() {
  const repoData = useSWR("/api/projects?type=favorite", fetcher);
  const classes = projectCardsStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof repoData.data != "undefined") {
      setIsLoading(false);
    }
  }, [repoData.data]);

  return (
    <Box className={classes.projectContainer}>
      {Array.isArray(repoData?.data) ? (
        repoData?.data?.map((item, index) => {
          return (
            <ProjectCard
              key={`project-card-${index}`}
              project={item}
              isLoading={isLoading}
            />
          );
        })
      ) : (
        <>
          <ProjectCard isLoading={isLoading} />
          <ProjectCard isLoading={isLoading} />
          <ProjectCard isLoading={isLoading} />
          <ProjectCard isLoading={isLoading} />
          <ProjectCard isLoading={isLoading} />
        </>
      )}
    </Box>
  );
}
