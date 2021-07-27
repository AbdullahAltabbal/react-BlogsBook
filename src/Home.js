import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const pending = <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>{pending}</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
