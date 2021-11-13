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
    <div className="">
      <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-gray-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-500">
      <h1 className="text-xl font-semibold mb-5 text-gray-600">Upload a Gif</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload a gif"
        onChange={uploadGif}
        class="hidden"
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
</svg>
      </label>
      {loading ? 
        <h1 className="text-4xl text-center text-gray-500 mx-auto mt-32">
          Loading...
        </h1>
       : 
       <div className="grid grid-cols-3 gap-4">{gif.map((gif) => (
          <img
            className="max-w-sm m-8 rounded overflow-hidden shadow-lg bg-white"
            src={gif.secure_url}
          />
        ))
      }</div>}
    </div>
  );
}

export default Upload;
