import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { fetchRentData } from "./store/api/rent-api-actions";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ChartLine from "./components/Chart/ChartLine";
import ItemModal from "./components/ItemModal/ItemModal";
import Table from "./components/Table/Table";
import DeleteItemModal from "./components/DeleteItemModal/DeleteItemModal";
import "./App.css";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const isLoaded = useAppSelector((state) => state.ui.isLoaded);
  const errorMessage = useAppSelector((state) => state.ui.loadingMessage);
  const rowData = useAppSelector((state) => state.modal.updateItemData);
  const isCreateModalShown = useAppSelector(
    (state) => state.modal.isCreateModalShown
  );
  const isUpdateModalShown = useAppSelector(
    (state) => state.modal.isUpdateModalShown
  );
  const isDeleteModalShown = useAppSelector(
    (state) => state.modal.isDeleteModalShown
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRentData());
  }, [dispatch]);

  return (
    <div className="App">
      {isCreateModalShown && <ItemModal />}
      {isUpdateModalShown && <ItemModal updateItem={true} data={rowData} />}
      {isDeleteModalShown && <DeleteItemModal />}

      {isLoading && (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      )}
      {isLoaded && (
        <>
          <ChartLine />
          <Table />
        </>
      )}
      {errorMessage && <div className="loading-error">{errorMessage}</div>}
    </div>
  );
}

export default App;
