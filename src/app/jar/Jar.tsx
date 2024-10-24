import { useSelector } from "react-redux";
import { RootStateType } from "../../lib/redux/store.ts";
import ItemDefault from "../../components/items/ItemDefault.tsx";
import Chart from "./Chart.tsx";
import Button from "../../components/ui/Button.tsx";
import { useState } from "react";

const Jar = () => {
  const [isChartVisible, setIsChartVisible] = useState<boolean>(false);
  const { jar, calories } = useSelector((state: RootStateType) => state.fruits);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-4xl">Jar</h2>

      {!jar.length ? (
        <div className="text-center">Your Jar is empty</div>
      ) : (
        <>
          {/* Header */}
          <div className="mb-2 flex items-center justify-between gap-4 bg-theme-light p-2">
            <h2 className="text-xl">
              Total calories: <b>{calories}</b>
            </h2>

            {/*Charts trigger*/}
            <Button primary onClick={() => setIsChartVisible(!isChartVisible)}>
              {isChartVisible ? "List view" : "Chart view"}
            </Button>
          </div>

          {/*Charts, items*/}
          {isChartVisible ? (
            <Chart />
          ) : (
            <div className="flex flex-col gap-2">
              {jar.map((fruit) => (
                <ItemDefault key={fruit.id} fruit={fruit} isJarItem />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jar;
