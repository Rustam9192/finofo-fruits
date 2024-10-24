import { groups } from "../../../config/groups.ts";
import { useDispatch, useSelector } from "react-redux";
import { fruitsActions } from "../../lib/redux/features/fruits/fruitsSlice.ts";
import { RootStateType } from "../../lib/redux/store.ts";
import ListBox from "../../components/ui/ListBox.tsx";
import { TableCellsIcon } from "@heroicons/react/24/outline";

const Settings = () => {
  const { isSecondView, selectedGroup } = useSelector(
    (state: RootStateType) => state.fruits,
  );
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/*Select*/}
      <ListBox
        items={groups}
        defaultValue={selectedGroup}
        onSelect={(item) => dispatch(fruitsActions.setSelectedGroup(item))}
      />
      {/*Second view(table view) trigger*/}
      <TableCellsIcon
        onClick={() => dispatch(fruitsActions.setIsSecondView(!isSecondView))}
        className={`border-grey/30 h-10 w-10 cursor-pointer rounded-full border p-2 transition-all duration-300 hover:scale-110 hover:border-theme-prime ${isSecondView ? "border-theme-prime bg-theme-prime text-white" : "hover:text-theme-prime"}`}
      />
    </div>
  );
};

export default Settings;
