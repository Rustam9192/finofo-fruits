import { useGetFruitsQuery } from "./lib/redux/features/fruits/fruitsApiSlice.ts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootStateType } from "./lib/redux/store.ts";
import { fruitsActions } from "./lib/redux/features/fruits/fruitsSlice.ts";
import Loading from "./components/states/Loading.tsx";
import ErrorBox from "./components/states/Error.tsx";
import FruitsContainer from "./app/fruitsContainer/FruitsContainer.tsx";
import { Container } from "./components/ui/Container.tsx";
import Jar from "./app/jar/Jar.tsx";

function App() {
  const dispatch: AppDispatchType = useDispatch();
  const { fruits } = useSelector((state: RootStateType) => state.fruits);

  const { data, isLoading, error } = useGetFruitsQuery(undefined, {
    skip: !!fruits,
  });

  useEffect(() => {
    if (data) dispatch(fruitsActions.setFruits(data));
  }, [data, dispatch]);

  if (isLoading) return <Loading />;

  if (error)
    return (
      <ErrorBox message="Ooops... Something went wrong. Please try again later" />
    );

  return (
    <main className="py-12">
      <Container>
        <div className="grid gap-4 transition-all duration-1000 md:grid-cols-2">
          {/*Left, fruits*/}
          <FruitsContainer />

          {/*Right, jar*/}
          <Jar />
        </div>
      </Container>
    </main>
  );
}

export default App;
