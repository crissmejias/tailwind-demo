const Footer = () => {
  return (
    <footer className="mt-12  py-4 md:py-10 w-full text-white bg-secondary flex flex-col gap-2 md:flex-row-reverse md:justify-evenly ">
      <div className="flex flex-col items-center my-4">
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Instagram</div>
      </div>
      <ul className="flex flex-col items-center">
        <li>Soporte</li>
        <li>Acerca de nosotros</li>
        <li>Registro</li>
        <li>Aviso de privacidad</li>
      </ul>
    </footer>
  );
};
export { Footer };
