import React from "react";
import { ThemeToggler } from "./../components/themeToggler/themeToggler";
import { stars } from "./../utils/utils";

const themetoggler = () => {
  const newArr = stars(500, window.innerWidth, window.innerHeight);
  return (
    <div>
      <ThemeToggler>
        {newArr.map((item) => (
          <ThemeToggler.Star
            left={`${item.x}px`}
            top={`${item.y}px`}
            width={`${item.size}px`}
            height={`${item.size}px`}
            key={Math.random() * Date.now()}
            animationDuration={`${item.duration}s`}
            animationDelay={`${item.delay}s`}
          />
        ))}
        <ThemeToggler.Moon />
        <div>
          <ThemeToggler.ImageForest
            src={`/images/ThemeTogglerImage/forest.png`}
          />
        </div>
      </ThemeToggler>
    </div>
  );
};

export default themetoggler;
