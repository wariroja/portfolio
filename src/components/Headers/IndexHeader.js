/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="rounded-circle img-raised"
              src={require("assets/img/now-logo.png")}
              width="260" height="260"></img>   
              <br/>
              <br/> 
            <h1 className="h1-seo">Hello! I'm Warinya</h1>
            <h3>A front end focused developer with a fullstack experience.</h3>
          </div>
          <h6 className="category category-absolute">
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
