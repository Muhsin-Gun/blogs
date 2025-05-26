import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
const Home =() =>{
    const {data}=UseFetch('http://localhost:4001/blogs');
    return(
        <div className="home">
            
            {data && <BlogList blogs={data} title="All blogs"/>}
        </div>

    );
}
export default Home;