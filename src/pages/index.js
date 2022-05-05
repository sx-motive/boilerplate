import ImgCom from "../components/image";
import Caption from "../components/caption";
import Paragrapth from "../components/paragrapth";

export default function Home() {
  return (
    <section className="s1" data-scroll-section>
      <div className="container">
        <ImgCom src="/images/image.jpg" alt="alt of image" />
        <ImgCom src="/images/01.jpg" alt="alt of image" />
        <ImgCom src="/images/02.jpg" alt="alt of image" />
        <Caption size="big">Title level 1</Caption>
        <Paragrapth size="big">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragrapth>
        <Caption size="medium">Title level 2</Caption>
        <Paragrapth size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragrapth>
        <Caption size="small">Title level 3</Caption>
        <Paragrapth size="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragrapth>
      </div>
    </section>
  );
}
