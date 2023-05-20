import list from "../data";
import "../styles/amazon.css";
import Cards from "./Cards";

const Amazon = () => {
  return (
    <section>
      {list.map((item) => (
        <Cards item={item} />
      ))}
    </section>
  );
};

export default Amazon;
