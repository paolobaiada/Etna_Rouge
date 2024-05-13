import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import HeroSection from "./HeroSection";

const Content = () => {
  const dispatch = useAppDispatch();
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, []);

  const filteredContentsHero = contents.filter(
    (items) => items.fields.title === "Hero Section ER"
  );
  console.log(contents);

  if (loading) {
    return <span> loading... </span>;
  }

  if (error) {
    return <span> {error.message} </span>;
  }

  return (
    <div>
      {filteredContentsHero &&
        filteredContentsHero.map((item) => (
          <HeroSection key={item.sys.id} content={item.fields} />
        ))}
    </div>
  );
};

export default Content;
