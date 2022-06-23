import React from "react";
import "../style.css";

function Blogs() {
  return (
    <div>
      {/* <h1 className="blogheader">Recommended Blogposts</h1> */}
      <br></br>
      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@anna.revall.clausen/where-to-start-debugging-tips-and-tricks-for-javascript-beginners-fb79567155de"
          >
            <img
              src="./AnnasBlog.png"
              className="images"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@levydlior/making-a-react-app-with-the-green-red-greed-method-833e020bb237"
          >
            <img
              src="./LiorsBlog.png"
              className="images"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@samantha.m.navarro/96cd48d17a2e"
          >
            <img
              src="./SamanthasBlog.png"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@terrencejung/going-beyond-arrays-sets-6c0dd43fc91e"
          >
            <img
              src="./TerrencesBlog.png"
              className="images"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@conniedc1206/simple-tips-on-responsive-web-design-c9aaedcd6886"
          >
            <img
              src="./ConniesBlog.png"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@scdorsey22/principles-for-refactoring-7630a672b3a3"
          >
            <img src="./ShanesBlog.png" alt="Forest" width="600" height="400" />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@b3nmurphy924/the-babel-toolchain-940a3a599634"
          >
            <img src="./BenBlog.png" alt="Forest" width="600" height="400" />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://medium.com/@erik.quintana/the-6-fundamentals-of-javascript-eb476ab40596"
          >
            <img src="./EriksBlog.png" alt="Forest" width="600" height="400" />
          </a>
        </div>
      </div>

      <br></br>

      <div class="responsive">
        <div class="gallery">
          <a
            target="_blank"
            href="https://dev.to/tlncook/function-introduction-1h19"
          >
            <img src="./ThomasBlog.png" alt="Forest" width="600" height="400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
