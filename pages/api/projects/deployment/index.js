export default async function handler(req, res) {
  const { url } = req.query;
  const bearerToken = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
  const authorizationHeader = {
    headers: {
      Authorization: bearerToken,
    },
  };

  try {
    const response = await fetch(url, authorizationHeader);
    const deployments = await response.json();

    const statusesUrl = deployments[0].statuses_url;

    const statusesResponse = await fetch(statusesUrl, authorizationHeader);
    const statuses = await statusesResponse.json();

    const currentDeployment = statuses.find(
      (status) => status.state === "success"
    );
    const returnUrl = currentDeployment.environment_url;

    return res.status(200).json(returnUrl);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
}
