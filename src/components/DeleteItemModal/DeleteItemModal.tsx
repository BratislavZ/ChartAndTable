import React from "react";
import { sendToDelete } from "../../store/api/rent-api-actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { modalActions } from "../../store/slices/modal-slice";
import { uiActions } from "../../store/slices/ui-slice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Modal from "../Modal/Modal";
import styles from "./DeleteItemModal.module.css";


const DeleteItemModal: React.FC = () => {
  const sendingMessage = useAppSelector((state) => state.ui.sendingMessage);
  const rentId = useAppSelector((state) => state.modal.deleteItemId);
  const isSending = useAppSelector((state) => state.ui.isSending);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(sendToDelete(rentId));
  };

  const closeHandler = () => {
    dispatch(modalActions.close());
    dispatch(uiActions.resetSendingMessage());
  };

  return (
    <Modal onClose={closeHandler}>
      <div className={styles.dialog}>
        <div className={styles.title}>
          Are you sure that you want to delete it?
        </div>
        <div className={styles.buttons}>
          {isSending && (
            <div className={styles.spinner}>
              <LoadingSpinner size="small" />
            </div>
          )}
          {!isSending && <button onClick={deleteHandler}>Yes</button>}
          <button onClick={closeHandler}>No</button>
        </div>
        {sendingMessage && <div className={styles.error}>{sendingMessage}</div>}
      </div>
    </Modal>
  );
};

export default DeleteItemModal;
