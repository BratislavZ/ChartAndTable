import React, { useState, useRef } from "react";
import { Rent } from "../../models/interface";
import { sendNewItem, sendUpdatedItem } from "../../store/api/rent-api-actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { modalActions } from "../../store/slices/modal-slice";
import { uiActions } from "../../store/slices/ui-slice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Modal from "../Modal/Modal";
import styles from "./ItemModal.module.css";

interface Props {
  data?: Rent;
  updateItem?: boolean;
}

const ItemModal: React.FC<Props> = (props) => {
  const sendingMessage = useAppSelector((state) => state.ui.sendingMessage);
  const isSending = useAppSelector((state) => state.ui.isSending);
  const rentItems = useAppSelector((state) => state.rent.rentData);
  const dispatch = useAppDispatch();

  const [validationMessage, setValidationMessage] = useState("");

  const startingRentRef = useRef<HTMLInputElement>(null);
  const effectiveRentRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const messageStyle = () => {
    let style = `${styles.message} `;
    if (validationMessage || sendingMessage === "Something went wrong!") {
      style += `${styles.error}`;
    }
    return style;
  };

  const closeHandler = () => {
    dispatch(modalActions.close());
    dispatch(uiActions.resetSendingMessage());
  };

  const validation = () => {
    if (
      effectiveRentRef.current?.value.trim().length === 0 ||
      startingRentRef.current?.value.trim().length === 0 ||
      yearRef.current?.value.trim().length === 0
    ) {
      setValidationMessage("Inputs are empty!");
      return false;
    }

    const existingItem = rentItems.find(
      (item) => item.year === Number(yearRef.current?.value)
    );
    
    if (existingItem && existingItem?.id !== props.data?.id) {
      setValidationMessage("Year is already taken!");
      return false;
    }
    if (existingItem && !props.updateItem) {
      setValidationMessage("Year is already taken!");
      return false;
    }
    return true;
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationMessage("");
    dispatch(uiActions.resetSendingMessage());

    if (!validation()) {
      return;
    }

    const data = {
      year: Math.trunc(Number(yearRef.current?.value)),
      effectiveRent: Number(effectiveRentRef.current?.value),
      startingRent: Number(startingRentRef.current?.value),
    };

    if (props.updateItem && props.data) {
      dispatch(sendUpdatedItem(data, props.data.id)).then(() => {
        setValidationMessage("");
      });
    } else {
      dispatch(sendNewItem(data)).then(() => {
        setValidationMessage("");
      });
    }
  };

  return (
    <Modal onClose={closeHandler}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.title}>Rent Data</div>
        <div className={styles.inputs}>
          <div className={styles["input-field"]}>
            <label className={styles.label}>Starting rent</label>
            <input
              type="number"
              ref={startingRentRef}
              defaultValue={props.data?.startingRent || ""}
              min="0"
            />
          </div>

          <div className={styles["input-field"]}>
            <label className={styles.label}>Effective rent</label>
            <input
              type="number"
              ref={effectiveRentRef}
              defaultValue={props.data?.effectiveRent || ""}
              min="0"
            />
          </div>

          <div className={styles["input-field"]}>
            <label className={styles.label}>Year</label>
            <input
              type="number"
              ref={yearRef}
              defaultValue={props.data?.year || ""}
              className={styles.input}
              min="0"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          {isSending && (
            <div className={styles.spinner}>
              <LoadingSpinner size="small" />
            </div>
          )}
          {!isSending && <button>Save</button>}

          <button type="button" onClick={closeHandler}>
            Cancel
          </button>
        </div>
        {(validationMessage || sendingMessage) && (
          <div className={messageStyle()}>
            {validationMessage || sendingMessage}
          </div>
        )}
      </form>
    </Modal>
  );
};

export default ItemModal;
