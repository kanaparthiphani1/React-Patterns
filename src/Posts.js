export const Posts = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => {
          return <h4>{post.title}</h4>;
        })}
    </>
  );
};
