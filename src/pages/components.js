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
          <Text caption size="medium">
            Captions
          </Text>
          <Text>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона, а также
            реальное распределение букв и пробелов в абзацах, которое не
            получается при простой дубликации "Здесь ваш текст.. Здесь ваш
            текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
            редакторы HTML используют Lorem Ipsum в качестве текста по
            умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
            показывает, как много веб-страниц всё ещё дожидаются своего
            настоящего рождения. За прошедшие годы текст Lorem Ipsum получил
            много версий. Некоторые версии появились по ошибке, некоторые -
            намеренно (например, юмористические варианты).
          </Text>
        </div>
        <div className="container">
          <Text caption size="big">
            Title level 1
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text caption size="medium">
            Title level 2
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text caption size="small">
            Title level 3
          </Text>
          <Text>
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
