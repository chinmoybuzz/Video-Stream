import React from "react";
import { Link } from "react-router";

const Video = () => {
  const today = new Date().toDateString();

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Video List</h1>
      <Link to="/admin/upload" className="bg-blue-600 text-black px-4 py-2 rounded">
        + Upload New
      </Link>
      <table className="table ">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Video Title</th>
            <th scope="col">Views</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src="https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg" style={{ width: "60px", height: "60px", objectFit: "cover" }} alt="thumbnail" />
              <span> React Router v6 Basics</span>
            </td>
            <td>675</td>
            <td>{today}</td>
            <td>Active/Inactive</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Video;
