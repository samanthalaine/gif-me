import React, { useState } from "react";

function Upload() {
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(gif);

  const uploadGif = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "samantha");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqapspd5t/image/upload/?api_key793118652795214",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(gif);

    setGif([...gif, file]);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-xl text-blue-600">Upload Gif</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload a gif"
        onChange={uploadGif}
      />

      {loading ? (
        <h1 className="text-4xl text-center text-gray-500 mx-auto mt-32">Loading...</h1>
      ) : (
          
        gif.map((gif) => (
        <img src={gif.secure_url} />)
        ))}
    </div>
  );
}

export default Upload;
