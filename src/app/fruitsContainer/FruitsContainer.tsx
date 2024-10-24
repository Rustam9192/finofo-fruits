import { useSelector } from "react-redux";
import { RootStateType } from "../../lib/redux/store.ts";
import ItemDefault from "../../components/items/ItemDefault.tsx";
import Settings from "./Settings.tsx";
import ItemDisclosure from "../../components/items/ItemDisclosure.tsx";
import {
  FruitType,
  GroupKeyType,
} from "../../lib/redux/features/fruits/fruitsSlice.ts";

const FruitsContainer = () => {
  const { fruits, isSecondView, selectedGroup } = useSelector(
    (state: RootStateType) => state.fruits,
  );

  if (!fruits) return;

  // This part is the trickiest in the whole test task
  const groupedFruits = fruits.reduce(
    (acc, fruit) => {
      const key = fruit[selectedGroup as GroupKeyType];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(fruit);
      return acc;
    },
    {} as Record<string, FruitType[]>,
  );

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-4xl">Fruits</h2>

      {/*Settings*/}
      <Settings />

      {/*If selected group is not none, we are showing disclosures*/}
      {selectedGroup !== "none" ? (
        <div className="flex flex-col gap-2">
          {Object.keys(groupedFruits!).map((groupKey) => (
            <ItemDisclosure
              key={groupKey}
              groupName={groupKey}
              fruits={groupedFruits![groupKey]}
            />
          ))}
        </div>
      ) : (
        <div
          className={`grid gap-2 ${isSecondView ? "lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
        >
          {fruits.map((fruit) => (
            <ItemDefault key={fruit.id} fruit={fruit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FruitsContainer;
