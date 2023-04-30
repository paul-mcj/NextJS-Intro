// note: To make dynamic pages with Next.js, use square brackets when naming the file. So this loaded component is for "domain.com/news/{newsId}"

// note: this hook allows us to extract dynamic parameter values, which is useful for programmatic navigation and url paths
import { useRouter } from "next/router";

const Article = () => {
     const router = useRouter();

     // note: router.query.newsId is named because the query method is part of the router hook object, and the newsId is the dynamic name we used in the file structure! Having this info is crucial for Next.js projects as it allows you to have exact endpoints to integrate with the backend.
     const endpoint = router.query.newsId;

     return <div>Article {endpoint}</div>;
};
export default Article;
