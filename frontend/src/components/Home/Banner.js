import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const handleChange = (ev) => {
    const title = ev.target.value;
    if (title.length < 3) {
      return;
    }

    props.onChangeTitle(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>
            A place to{" "}
            <span id="get-part" onClick={() => setIsShowSearch(true)}>
              get
            </span>
          </span>
          {isShowSearch && (
            <input
              id="search-box"
              type="text"
              name="title"
              placeholder="What is it that you truly desire?"
              onChange={handleChange}
            />
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
