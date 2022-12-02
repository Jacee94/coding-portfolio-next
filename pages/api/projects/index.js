export default async function handler(req, res) {
    const repoTypes = req.query.type || null;
    const url = "https://api.github.com/user/repos";
    const bearerToken = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
    const filteredRepos = [];

    try {
        const githubRes = await fetch(url, {
            headers: {
                Authorization: bearerToken 
            }
        })
        const data = await githubRes.json();

        if(repoTypes) {
            const filteredData = data.filter((repo) => repo.topics.includes(repoTypes))

            filteredData.forEach((repo) => {
                const repoData = {
                    name: repo.name,
                    description: repo.description,
                    repo_url: repo.html_url
                }

                filteredRepos.push(repoData);
            })
        }
        
        return res.status(200).json(filteredRepos);
    } catch (error) {
        return res.status(500).json({err: error});
    }
}
