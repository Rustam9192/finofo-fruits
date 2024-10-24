import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  fruitsActions,
  FruitType,
} from "../../lib/redux/features/fruits/fruitsSlice.ts";
import ItemDefault from "./ItemDefault.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../lib/redux/store.ts";
import Button from "../ui/Button.tsx";
import { PlusIcon } from "@heroicons/react/24/outline";

interface ItemDisclosureProps {
  groupName: string;
  fruits: FruitType[];
}

const ItemDisclosure = ({ groupName, fruits }: ItemDisclosureProps) => {
  const { isSecondView } = useSelector((state: RootStateType) => state.fruits);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      {/*Add the whole group CTA*/}
      <Button
        primary
        className="absolute left-2 top-1.5"
        onClick={() => dispatch(fruitsActions.addToJar(fruits))}
      >
        <PlusIcon className="h-5 w-5" />
      </Button>

      {/*Group disclosure*/}
      <Disclosure as="div">
        {/*Trigger*/}
        <DisclosureButton className="group flex w-full items-center justify-between gap-1 bg-theme-light p-3 pl-14 transition-all duration-300 hover:shadow-lg">
          <span className="text-sm font-medium">{groupName}</span>
          <ChevronDownIcon className="size-5 text-theme-dark transition-transform group-data-[open]:rotate-180" />
        </DisclosureButton>

        {/*Body*/}
        <DisclosurePanel className="mt-2 rounded-md border p-2 text-sm">
          <div
            className={`grid gap-2 ${isSecondView ? "lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
          >
            {fruits.map((fruit) => (
              <ItemDefault key={fruit.id} fruit={fruit} />
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default ItemDisclosure;
