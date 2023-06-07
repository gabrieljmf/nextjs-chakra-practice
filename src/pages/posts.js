// import { useEffect, useState } from "react";
import Link from "next/link";

export const getServerSideProps = async () => {
// export const getStaticProps = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      return res.json();
    }
  );
  const time = Date.now();
  return { props: { posts, time } };
};

/**
 * PostsPage uses Next/Props to pre-load json data
 * @param { posts, time} from getServerSideProps/getStaticProps 
 * @returns {} escapes HTML and lets us use jsx
 */
const PostsPage = ({ posts, time }) => {
// Same thing using useState/useEffect
  // const [posts, setPosts] = useState([])

  // useEffect(() => {

  // }, [])
  return (
    <div>
      <div className="time">{time}</div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsPage;