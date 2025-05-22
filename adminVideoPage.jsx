import React from "react";
import { Link } from "react-router";

const Video = () => {
  const videos = [
    {
      id: 1,
      title: "React Tutorial",
      thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      views: 2300,
      status: "Published",
      uploadedAt: "2025-05-20",
    },
    {
      id: 2,
      title: "Node.js Basics",
      thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      views: 1450,
      status: "Draft",
      uploadedAt: "2025-05-18",
    },
    // Add more video data as needed
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Video List</h1>
        <Link to="/admin/upload" className="bg-blue-600 text-black px-4 py-2 rounded">
          + Upload New
        </Link>
      </div>
      <table className="w-full text-left border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Thumbnail</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Views</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Uploaded</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2 border">
              <img src="https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg" alt="chinmoy" style={{ width: "60px", height: "60px", objectFit: "cover" }} className="w-20 h-12 object-cover" />
            </td>
            <td className="p-2 border">Title1</td>
            <td className="p-2 border">3000</td>
            <td className="p-2 border">
              {/* <span className={`px-2 py-1 rounded text-white ${video.status === "Published" ? "bg-green-600" : "bg-yellow-600"}`}>Active</span> */}
              <span className={`px-2 py-1 rounded text-white  "bg-green-600" `}>Active</span>
            </td>
            <td className="p-2 border">Date</td>
            <td className="p-2 border">
              <button className="text-blue-600 hover:underline mr-2">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Video;
