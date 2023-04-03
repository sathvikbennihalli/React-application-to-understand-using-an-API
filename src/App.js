import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImage from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImage(term);

    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
