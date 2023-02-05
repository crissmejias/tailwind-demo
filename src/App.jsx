import { Card } from "./Card";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Banner } from "./Banner";
import { Form } from "./Form";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className=" bg-gray-400 mx-auto py-20 flex gap-12 flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Form />
      <Footer />
    </>
  );
}
export default App;
