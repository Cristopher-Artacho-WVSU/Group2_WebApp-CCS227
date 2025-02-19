import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cris from "../assets/members/artacho.png";
import mans from "../assets/members/carado.png";
import ollie from "../assets/members/ladores.png";
import aika from "../assets/members/nava.png";
import reycel from "../assets/members/sarmiento.png";
import els from "../assets/members/constantino.png";
import wu_blue from "../assets/logos/wu_blue.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Carousel() {
  return (
    <div className="w-3/4 m-auto mb-32 mt-20">
      <div className=" flex flex-row items-center justify-center gap-10">
        <h1
          className="font-poppins font-bold text-4xl lg:text-6xl"
          style={{ color: "#7181A7" }}
        >
          Meet the people behind
        </h1>
        <img src={wu_blue} alt="" className="h-28 lg:h-36 w-auto" />
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="h-80 rounded-xl" key={d.name}>
              <div className="h-56 rounded-t-xl flex justify-center items-center">
                <img src={d.img} alt="" className="h-80 w-80" />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h2
                  className="font-poppins font-bold text-2xl "
                  style={{ color: "#7181A7" }}
                >
                  {d.name}
                </h2>
                <p className="font-poppins " style={{ color: "#7181A7" }}>
                  {d.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Oliver Ladores",
    img: ollie,
    title: "Lead Developer",
  },
  {
    name: "John Manuel Carado",
    img: mans,
    title: "Project Manager",
  },
  {
    name: "Angelika Marie Nava",
    img: aika,
    title: "UI/UX Designer",
  },
  {
    name: "Reycel Sarmiento",
    img: reycel,
    title: "UI/UX Designer",
  },
  {
    name: "Els Dave Constantino",
    img: els,
    title: "Front-end Developer",
  },
  {
    name: "Cristopher Ian Artacho",
    img: cris,
    title: "Front-end Developer",
  },
];

export default Carousel;
