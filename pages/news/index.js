// note: again, index.js is the root path but because it is located in another folder it is now the default path for this named folder. So, this index.js page is loaded for "domain.com/news" which is different than other index.js files depending on where they show in the folder structure of the project. This is how Next.js allows you to created nested pages/routes.

// note: with Next.js, import a Link like react-router
import Link from "next/link";

const NewsPage = () => {
     return (
          <>
               <h1>NewsPage</h1>
               <ul>
                    <li>
                         <Link href="/news/article-1">Article 1</Link>
                    </li>
               </ul>
               <ul>
                    <li>
                         <Link href="/news/article-2">Article 2</Link>
                    </li>
               </ul>
          </>
     );
};
export default NewsPage;
