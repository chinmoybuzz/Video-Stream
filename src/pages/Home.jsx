import { Link } from "react-router";
import "../index.css";
import VideoCard from "../components/VideoCard";
import { useState } from "react";

const Home = () => {
  const [video, setVideo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Sidebar --> */}
          <div className="col-md-2 d-none d-md-block bg-light sidebar p-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trending">
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Subscriptions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Library
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Main Content --> */}
          <div className="col-md-10 p-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {/* <!-- Video Card --> */}
              {video.map((value) => (
                <VideoCard key={value} />
              ))}

              {/* <!-- Add more cards... --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
