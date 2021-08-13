import { useData } from "../context/context";
import SavedCard from "./SavedCard";

const SavedList = () => {
  const { state } = useData();

  return (
    <>
      <h2>Saved For Later</h2>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {state.savedList.map((item) => {
          return <SavedCard item={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default SavedList;
