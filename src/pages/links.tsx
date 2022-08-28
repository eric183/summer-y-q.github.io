import { graphql, useStaticQuery } from "gatsby";
import { FC } from "react";

type IndexResponseData = {
  data?: GatsbyTypes.SanityLinksConnection;
};

const Links: FC<IndexResponseData> = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query {
      allSanityLinks {
        nodes {
          title
          src
          emoji
        }
      }
    }
  `);
  const { nodes } = data.allSanityLinks;
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <ul className="text-zinc-900">
        {nodes.map((node, index) => (
          <li key={index}>
            <a className="text-zinc-700" href={node.src} target="__blank">
              <i className={node.emoji + " m-6"}></i>

              {node.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Links;
