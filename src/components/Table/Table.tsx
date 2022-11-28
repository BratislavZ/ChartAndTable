import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { modalActions } from "../../store/slices/modal-slice";
import Row from "./Row/Row";
import styles from "./Table.module.css";

const Table: React.FC = () => {
  const rentData = useAppSelector((state) => state.rent.rentData);
  const dispatch = useAppDispatch();

  const createItemHandler = () => {
    dispatch(modalActions.create());
  };

  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Rent Data Table</div>
          <div className={styles["button-container"]}>
            <div className={styles.button} onClick={createItemHandler}>
              {addIcon}
              <span>Add</span>
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Starting rent</th>
              <th>Effective rent</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentData.map((rent) => (
              <Row key={rent.id} rent={rent} />
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Table;

const addIcon = (
  <svg
    width={22}
    height={22}
    id="Capa_1"
    viewBox="0 0 251.882 251.882"
    xmlSpace="preserve"
    fill="white"
  >
    <path d="M215.037,36.846c-49.129-49.128-129.063-49.128-178.191,0c-49.127,49.127-49.127,129.063,0,178.19   c24.564,24.564,56.83,36.846,89.096,36.846s64.531-12.282,89.096-36.846C264.164,165.909,264.164,85.973,215.037,36.846z    M49.574,202.309c-42.109-42.109-42.109-110.626,0-152.735c21.055-21.054,48.711-31.582,76.367-31.582s55.313,10.527,76.367,31.582   c42.109,42.109,42.109,110.626,0,152.735C160.199,244.417,91.683,244.417,49.574,202.309z" />
    <path d="M194.823,116.941h-59.882V57.059c0-4.971-4.029-9-9-9s-9,4.029-9,9v59.882H57.059c-4.971,0-9,4.029-9,9s4.029,9,9,9h59.882   v59.882c0,4.971,4.029,9,9,9s9-4.029,9-9v-59.882h59.882c4.971,0,9-4.029,9-9S199.794,116.941,194.823,116.941z" />
  </svg>
);
