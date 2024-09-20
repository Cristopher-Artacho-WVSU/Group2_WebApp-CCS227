import wu_blue from "../../assets/logos/wu_blue.png";
const FooterBlue = () => {
  return (
    <div
      className="py-5 w-full shadow-lg m-0 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#CFE4F4" }}
    >
      <img
        src={wu_blue}
        className="w-auto h-20 mb-5 transition-transform duration-80 ease-in-out hover:scale-105"
      />

      <p className="text-gray-700 font-extrabold font-poppins ">
        © 2024 Water-up inc. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBlue;
