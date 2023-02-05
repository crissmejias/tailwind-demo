import banner from "./assets/banner.avif";
const Banner = () => {
  return (
    <div
      className="h-56 md:h-96 md:bg-center bg-cover bg-bottom mx-auto"
      style={{ backgroundImage: `url(${banner})` }}></div>
  );
};
export { Banner };
