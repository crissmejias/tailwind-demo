const Form = () => {
  return (
    <form className="w-full h-64 bg-slate-100">
      <div className=" shadow-lg w-full bg-slate-100 mx-auto flex flex-col gap-8 relative justify-center items-center py-6">
        <h2 className="bg-slate-100 mx-auto text-xl text-center">
          Inscríbete a nuestro Newsletter
        </h2>
        <input
          type="text"
          className="rounded-lg w-64 text-center focus:outline-dashed focus:outline-2 focus:outline-green-300"
          placeholder="Nombre"
          name="name"
        />
        <input
          type="text"
          className="rounded-lg w-64 text-center focus:outline-dashed focus:outline-2 focus:outline-green-300"
          placeholder="Apellido"
          name="lastname"
        />
        <input
          type="text"
          className="rounded-lg w-64 text-center focus:outline-dashed focus:outline-2 focus:outline-green-300"
          placeholder="Email"
          name="email"
        />
        <button className="w-64 rounded-lg bg-green-500 focus:outline-dashed focus:outline-2 focus:outline-green-300 ">
          Submit
        </button>
      </div>
    </form>
  );
};
export { Form };
