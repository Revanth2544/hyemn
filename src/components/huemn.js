import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './huemn.css';
import Slide1 from '../images/slide 1.png';
import Slide2 from '../images/slide2.png';
import Slide3 from '../images/slide3.png';
import Chrome from "../images/chrome.jpeg"

gsap.registerPlugin(ScrollToPlugin);

function Huemn() {
  const containerRef = useRef(null);
  let prevScrollY = window.scrollY;

  useEffect(() => {
    const slides = containerRef.current.querySelectorAll('.slide');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY ? "down" : "up";

      if (direction === "down") {
        gsap.to(slides, {
          x: "-=100", 
          ease: "none"
        });
      } else {
        gsap.to(slides, {
          x: "+=100",
          ease: "none"
        });
      }

      prevScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <img src={Chrome} />
      </div>
      <div>
        <p style={{ fontSize: "86px", marginTop: "-20px" }}> <b>The browser<br />
          built to be yours</b></p>
      </div>
      <div style={{ marginTop: "-50px" }}>
        <p>Need the Chrome installer? <a href="link_to_chrome_installer" style={{ textDecoration: 'none' }}>Download here</a></p>
      </div>

      <div className="slideshow-container"
        ref={containerRef}
      >
        <div className="slide">
          <img src={Slide1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={Slide2} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={Slide3} alt="Slide 3" />
        </div>
      </div>

      <div>
        <p style={{ fontSize: "86px", marginTop: "-20px" }}> <b>Discover the latest
          <br />from Chrome</b></p>
      </div>
      <div style={{ marginTop: "-50px" }}>
        <p>Need the Chrome installer? <a href="link_to_chrome_installer" style={{ textDecoration: 'none' }}>Download here</a></p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula eget metus fringilla efficitur ut ac est. Mauris vel ante ipsum. Maecenas sed orci elementum, maximus elit quis, luctus neque. Praesent eu mollis nunc, tincidunt fermentum sapien. Nunc commodo lectus at arcu placerat, lacinia efficitur nisi accumsan. Nulla vitae magna ut odio ultricies congue. Donec dictum id odio eget consequat. Quisque maximus faucibus vehicula. In risus ante, condimentum vitae sodales nec, varius nec tellus. Nunc auctor faucibus eros eget pellentesque. Proin massa ex, sollicitudin ut tortor id, tincidunt ullamcorper augue.

          Cras at pharetra nulla. Nam vel magna in lorem consequat venenatis. Duis faucibus commodo sem, a venenatis urna blandit ac. Nullam ullamcorper odio quis metus lacinia bibendum. Pellentesque vestibulum rhoncus sem vel placerat. In aliquet ligula nec enim sollicitudin tincidunt. Ut id turpis eget ex pulvinar condimentum vestibulum ut lectus. Nulla fringilla dolor ac diam vulputate faucibus. Duis non tellus vitae purus consequat bibendum tristique eget lacus. Maecenas bibendum accumsan arcu, eu tincidunt dolor pretium sed. Sed ligula metus, maximus vel lorem ut, rutrum ultrices magna. Donec pretium dui vitae finibus dapibus. Integer aliquam consectetur lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id hendrerit purus.

          Ut a metus quis elit facilisis dapibus et eu libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at egestas dui. Quisque efficitur elit id luctus vestibulum. Aliquam erat volutpat. Curabitur et tempor urna, a eleifend ex. Cras id orci in lacus mattis blandit id in est. Pellentesque sed dolor eu lorem eleifend pulvinar et sed nunc. Cras mattis sem vitae urna faucibus ultrices. Morbi lobortis, sem eget commodo mattis, massa purus ultricies risus, ac posuere purus neque at arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin sapien quam, quis dictum libero ultrices scelerisque. In quis ipsum lobortis, placerat nunc at, blandit libero. Mauris tempor nulla ac elit vestibulum sodales. Nulla accumsan arcu odio, et vehicula neque volutpat eu. Aenean convallis lectus quis diam ornare, ac tristique augue tincidunt.

          Donec sed magna at arcu gravida dignissim. Cras at ipsum viverra, dictum leo sit amet, blandit metus. Curabitur fringilla dictum enim cursus blandit. Proin vel purus ac turpis dignissim interdum eu sit amet ipsum. Aenean sit amet sapien eget nunc convallis tempor in vel eros. In vitae tellus in massa sollicitudin aliquet sed eu purus. Cras hendrerit euismod mi non hendrerit. Ut et diam euismod, sodales nulla nec, fermentum turpis. Duis finibus vel orci vitae sodales. Aliquam ultrices arcu lorem, efficitur pretium libero fringilla et. Donec venenatis nulla et ipsum finibus, ut rutrum ligula faucibus. Nam velit felis, pellentesque sed risus non, vehicula semper orci. Maecenas viverra purus et nulla congue ornare. Nam auctor quam id neque viverra dapibus. Vivamus luctus, neque porttitor rutrum venenatis, nunc metus pretium neque, non bibendum eros nibh sed nulla. Nunc placerat luctus enim, ut lacinia sem sodales nec.

          Sed sit amet est quis lectus placerat ultrices nec in massa. Cras sodales pretium nibh et posuere. Morbi non odio condimentum, tincidunt justo in, sollicitudin enim. Etiam tortor est, pretium quis metus sed, hendrerit accumsan velit. Nullam vestibulum neque felis, a maximus erat condimentum non. Aliquam sit amet lacus quis turpis volutpat rhoncus. Vestibulum id gravida tortor. Sed posuere orci interdum ornare porttitor. Vivamus odio eros, vehicula nec laoreet et, malesuada sed justo. Maecenas tempor nisl eu libero pellentesque, eget viverra nisi sodales. Cras nec diam sed mi suscipit dignissim. Morbi lectus nibh, mattis sit amet nisi et, porta molestie risus. Maecenas laoreet efficitur sapien, id aliquet nibh auctor aliquam.
        </p>
      </div>

    </>
  );
}

export default Huemn;
