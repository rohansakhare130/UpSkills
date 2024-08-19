import "./App.css";
import ImageBox from "./components/ImageBox";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <div className="text-black flex items-center justify-center h-screen text-2xl font-bold">Loading...</div>;
  }

  if (error) {
    return <p className="text-black flex items-center justify-center h-screen text-2xl font-bold">Error: {error.message}</p>;
  }

  return (
    <div className="m-auto bg-black h-auto flex flex-col justify-center items-center">
      <h1 className="text-white text-center text-3xl font-bold pt-6">Photos</h1>

      <div className="grid grid-cols-4 gap-8 mt-5 scroll-smooth">
        {data.map(photo => (
          <ImageBox 
            key={photo.id}
            title={photo.title}
            url={photo.url} 
          />
        ))}
      </div>   
    </div>
  );
}

export default App;
