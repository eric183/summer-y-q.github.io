import { graphql } from "gatsby";
import { FC } from "react";

type IndexResponseData = {
  data: {
    allSanityLinks: {
      nodes: {
        title: string;
        src: string;
        emoji: string;
      }[];
    };
  };
};

const Index: FC<IndexResponseData> = (props) => {
  const { nodes } = props.data.allSanityLinks;
  console.log(nodes);
  return (
    <article>
      <ul>
        {nodes &&
          nodes.map((node, index) => (
            <li key={index}>
              <i className={node.emoji}></i>
              <a href={node.src} target="__blank">
                {node.title}
              </a>
            </li>
          ))}
      </ul>
    </article>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityLinks {
      nodes {
        title
        src
        emoji
      }
    }
  }
`;

export default Index;
