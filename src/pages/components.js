import Text from "../components/text";
import Img from "../components/img";
import Button from "../components/button";

import Image2 from "/public/images/02.jpg";
import Image3 from "/public/images/03.jpg";

export default function Components() {
  return (
    <>
      <section className="s-caption" data-scroll-section>
        <div className="container">
          <Text h size="medium">
            Captions
          </Text>
          <Text p size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </div>
        <div className="container">
          <Text h size="big">
            Title level 1
          </Text>
          <Text p size="big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text h size="medium">
            Title level 2
          </Text>
          <Text p size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text h size="small">
            Title level 3
          </Text>
          <Text p size="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </div>
      </section>
      <section className="s-images" data-scroll-section>
        <div className="container">
          <Img className="classImg" src={Image2} alt="alt" />
          <Img className="classImg" src={Image3} alt="alt" />
        </div>
      </section>
      <section className="s-buttons" data-scroll-section>
        <div className="container ">
          <Text h size="medium">
            Buttons
          </Text>
          <Text p size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </div>
        <div className="container btns">
          <div className="wrap">
            <Button link="/">Button</Button>
            <span className="subtitle">Default</span>
          </div>

          <div className="wrap">
            <Button link="/" className="skew">
              Button
            </Button>
            <span className="subtitle">Skew</span>
          </div>

          <div className="wrap">
            <Button link="/" className="underline">
              Button
            </Button>
            <span className="subtitle">Underline</span>
          </div>

          <div className="wrap">
            <Button link="/" className="outline">
              Button
            </Button>
            <span className="subtitle">Outline</span>
          </div>

          <div className="wrap">
            <Button link="/" className="solid">
              Button
            </Button>
            <span className="subtitle">Solid</span>
          </div>

          <div className="wrap">
            <Button link="/" className="rounded">
              Button
            </Button>
            <span className="subtitle">Rounded</span>
          </div>

          <div className="wrap">
            <Button link="/" className="outline" magnetic>
              Button
            </Button>
            <span className="subtitle">Magnetic</span>
          </div>
        </div>
      </section>
    </>
  );
}
