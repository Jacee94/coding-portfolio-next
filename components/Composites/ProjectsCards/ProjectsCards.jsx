import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";

export default function ProjectsCards() {
    const repoData = useSWR('/api/projects?type=favorite', fetcher);
    console.log(repoData.data);

    return(
        <>
        </>
    )
}
