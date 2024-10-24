import {
  fruitsActions,
  FruitType,
} from "../../lib/redux/features/fruits/fruitsSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../lib/redux/store.ts";
import Button from "../ui/Button.tsx";
import { PlusIcon } from "@heroicons/react/24/outline";

interface FruitItemProps {
  fruit: FruitType;
  isJarItem?: boolean;
}

const ItemDefault = ({ fruit, isJarItem }: FruitItemProps) => {
  const { isSecondView, selectedGroup } = useSelector(
    (state: RootStateType) => state.fruits,
  );
  const { name, nutritions, family, order, genus, quantity } = fruit;
  const dispatch = useDispatch();

  return (
    <div
      className={`relative flex rounded-lg border bg-theme-light/70 font-semibold transition-all duration-300 hover:shadow-md ${isSecondView && !isJarItem ? "flex-col gap-2 p-3" : "items-center justify-between gap-4 p-2"} ${!isJarItem && "min-h-full"}`}
    >
      <h4 className="mb-1 grow pr-6 text-lg">
        {name}
        {quantity && (
          <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-theme-prime p-1 text-xs font-black text-white">
            {quantity}
          </span>
        )}
      </h4>

      {/*I am hiding redundant info in selected groups, e.g. if you select (family) in (Group by), you will not see (Family:) in card*/}
      {isSecondView && !isJarItem && (
        <div className="flex flex-col gap-1 text-sm">
          {selectedGroup !== "family" && <p>Family: {family}</p>}
          {selectedGroup !== "order" && <p>Order: {order}</p>}
          {selectedGroup !== "genus" && <p>Genus: {genus}</p>}
        </div>
      )}
      <p>Cal: {nutritions.calories}</p>

      {/*CTA*/}
      {!isJarItem && (
        <Button
          primary
          className={`${isSecondView && "absolute right-3 top-2"}`}
          onClick={() => dispatch(fruitsActions.addToJar(fruit))}
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ItemDefault;
