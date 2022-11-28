import { AppDispatch } from "..";
import { modalActions } from "../slices/modal-slice";
import { rentActions } from "../slices/rent-slice";
import { uiActions } from "../slices/ui-slice";

export interface RequestRentData {
  year: number;
  effectiveRent: number;
  startingRent: number;
}

export const fetchRentData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.startedFetching());

    const fetchRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      return data;
    };

    try {
      const rentData = await fetchRequest();
      dispatch(rentActions.loadRentData(rentData));
      dispatch(uiActions.successfulFetching());
    } catch (error) {
      dispatch(uiActions.errorFetching("Something went wrong!"));
    }
  };
};

export const sendNewItem = (itemData: RequestRentData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.startedSending());

    const fetchRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data;
    };

    try {
      const newRentItem = await fetchRequest();
      dispatch(rentActions.addItem(newRentItem));
      dispatch(uiActions.successfulSending("Successfully created!"));
    } catch (error) {
      dispatch(uiActions.errorSending("Something went wrong!"));
    }
  };
};

export const sendUpdatedItem = (itemData: RequestRentData, id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.startedSending());

    const fetchRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data;
    };

    try {
      const updatedRentItem = await fetchRequest();
      dispatch(rentActions.updateItem(updatedRentItem));
      dispatch(uiActions.successfulSending("Successfully updated!"));
    } catch (error) {
      dispatch(uiActions.errorSending("Something went wrong!"));
    }
  };
};

export const sendToDelete = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.startedSending());

    const fetchRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data;
    };

    try {
      const deletedRentItem = await fetchRequest();
      dispatch(rentActions.removeItem(deletedRentItem.id));
      dispatch(uiActions.successfulSending(""));
      dispatch(modalActions.close());
    } catch (error) {
      dispatch(uiActions.errorSending("Something went wrong!"));
    }
  };
};
