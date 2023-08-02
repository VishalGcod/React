
const Blogs = (props) => {
    const arr=props.arr
    const title=props.title
    return (
        <div>
        {arr.map((ar) => (
          <div key={ar.id}>
            <h1>{ar.star}</h1>
          </div>
        ))}
        </div> 
     );
}
 
export default Blogs;