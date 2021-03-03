import React, { createRef, useState } from "react";
import { ThemeToggler } from "./../components/themeToggler/themeToggler";
import { stars } from "./../utils/utils";

const Themetoggler = () => {
  const [active, setActive] = useState(false);
  const ref = createRef();
  const handleClick = () => {
    const wrapper = ref.current;
    setActive((active) => !active);
    console.log("active", active);
    wrapper.classList.toggle("active");
  };

  const newArr = stars(50, window.innerWidth, window.innerHeight);
  return (
    <div>
      <ThemeToggler active={active}>
        {newArr.map((item) => (
          
          <ThemeToggler.Star
            active={active}
            left={`${item.x}px`}
            top={`${item.y}px`}
            width={`${item.size}px`}
            height={`${item.size}px`}
            key={Math.random() * Date.now()}
            animationDuration={`${item.duration}s`}
            animationDelay={`${item.delay}s`}
          />
        ))}
        <div
          ref={ref}
          className="wrapper"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <ThemeToggler.Moon active={active} />
        </div>
        <ThemeToggler.Cloud1 src={`/images/ThemeTogglerImage/cloud1.png`} />
        <ThemeToggler.Cloud2 src={`/images/ThemeTogglerImage/cloud2.png`} />
        <ThemeToggler.Cloud3 src={`/images/ThemeTogglerImage/cloud3.png`} />
        <div>
          <ThemeToggler.ImageForest
            active={active}
            src={`/images/ThemeTogglerImage/forest.png`}
          />
        </div>
        <ThemeToggler.Bg
          active={active}
          src={`/images/ThemeTogglerImage/bg.png`}
        />
      </ThemeToggler>
    </div>
  );
};

export default Themetoggler;
