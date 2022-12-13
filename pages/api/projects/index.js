import { appBarClasses, Experimental_CssVarsProvider } from "@mui/material";

export default async function handler(req, res) {
  const repoTypes = req.query.type || null;
  const url = "https://api.github.com/user/repos";
  const bearerToken = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
  const filteredRepos = [];
  const authorizationHeader = {
    headers: {
      Authorization: bearerToken,
    },
  };

  try {
    const githubRes = await fetch(url, authorizationHeader);
    const data = await githubRes.json();

    if (repoTypes) {
      const filteredData = data.filter((repo) =>
        repo.topics.includes(repoTypes)
      );

      for (const repo of filteredData) {
        const deploymentResponse = await fetch(
          `${req.headers.referer}/api/projects/deployment?url=${repo.deployments_url}`
        );
        const repoDeploymentData = await deploymentResponse.json();

        const imageResponse = await fetch(
          `https://api.github.com/repos/jacee94/${repo.name}/contents/assets/images/screenshot.JPG`,
          authorizationHeader
        );
        const { download_url: screenshot } = await imageResponse.json();

        const repoData = {
          name: repo.name,
          description: repo.description,
          repo_url: repo.html_url,
          deployment_url: repoDeploymentData,
          screenshot: screenshot,
        };

        filteredRepos.push(repoData);
      }
    }

    return res.status(200).json(filteredRepos);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
}
