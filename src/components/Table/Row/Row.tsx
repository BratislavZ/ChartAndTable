import { Rent } from "../../../models/interface";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { modalActions } from "../../../store/slices/modal-slice";

import styles from "./Row.module.css";

interface Props {
  rent: Rent;
}

const Row: React.FC<Props> = ({ rent }) => {
  const dispatch = useAppDispatch();

  const updateHandler = () => {
    dispatch(modalActions.update(rent));
  };

  const deleteHandler = () => {
    dispatch(modalActions.delete(rent.id));
  };

  return (
    <tr>
      <td>{rent.startingRent}</td>
      <td>{rent.effectiveRent}</td>
      <td>{rent.year}</td>
      <td>
        <div className={styles.actions}>
          <div className={styles.edit} onClick={updateHandler}>
            {editIcon}
          </div>
          <div className={styles.delete} onClick={deleteHandler}>
            {trashIcon}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Row;

const editIcon = (
  <svg
    id="Capa_1"
    width={20}
    height={20}
    viewBox="0 0 490.337 490.337"
    xmlSpace="preserve"
  >
    <path d="M229.9,145.379l-47.5,47.5c-17.5,17.5-35.1,35-52.5,52.7c-4.1,4.2-7.2,9.8-8.4,15.3c-6.3,28.9-12.4,57.8-18.5,86.7    l-3.4,16c-1.6,7.8,0.5,15.6,5.8,20.9c4.1,4.1,9.8,6.4,15.8,6.4c1.7,0,3.4-0.2,5.1-0.5l17.6-3.7c28-5.9,56.1-11.9,84.1-17.7    c6.5-1.4,12-4.3,16.7-9c78.6-78.7,157.2-157.3,235.8-235.8c5.8-5.8,9-12.7,9.8-21.2c0.1-1.4,0-2.8-0.3-4.1c-0.5-2-0.9-4.1-1.4-6.1    c-1.1-5.1-2.3-10.9-4.7-16.5l0,0c-14.7-33.6-39.1-57.6-72.5-71.1c-6.7-2.7-13.8-3.6-20-4.4l-1.7-0.2c-9-1.1-17.2,1.9-24.3,9.1    C320.4,54.879,275.1,100.179,229.9,145.379z M386.4,24.679c0.2,0,0.3,0,0.5,0l1.7,0.2c5.2,0.6,10,1.2,13.8,2.8    c27.2,11,47.2,30.6,59.3,58.2c1.4,3.2,2.3,7.3,3.2,11.6c0.3,1.6,0.7,3.2,1,4.8c-0.4,1.8-1.1,3-2.5,4.3    c-78.7,78.5-157.3,157.2-235.9,235.8c-1.3,1.3-2.5,1.9-4.3,2.3c-28.1,5.9-56.1,11.8-84.2,17.7l-14.8,3.1l2.8-13.1    c6.1-28.8,12.2-57.7,18.4-86.5c0.2-0.9,1-2.3,1.9-3.3c17.4-17.6,34.8-35.1,52.3-52.5l47.5-47.5c45.3-45.3,90.6-90.6,135.8-136    C384.8,24.979,385.7,24.679,386.4,24.679z" />
    <path d="M38.9,109.379h174.6c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H38.9c-21.5,0-38.9,17.5-38.9,38.9v327.4    c0,21.5,17.5,38.9,38.9,38.9h327.3c21.5,0,38.9-17.5,38.9-38.9v-167.5c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v167.5    c0,7.9-6.5,14.4-14.4,14.4H38.9c-7.9,0-14.4-6.5-14.4-14.4v-327.3C24.5,115.879,31,109.379,38.9,109.379z" />
  </svg>
);

const trashIcon = (
  <svg
    id="Layer_1"
    width={20}
    height={20}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <path d="M465.423,48.241h-137.61V23.955C327.813,10.746,317.082,0,303.893,0h-95.785c-13.19,0-23.92,10.746-23.92,23.955V48.24    H46.577c-6.655,0-12.049,5.394-12.049,12.049c0,6.655,5.394,12.049,12.049,12.049h22.332l15.228,396.396    C85.069,492.995,104.818,512,129.099,512h253.804c24.281,0,44.03-19.006,44.96-43.267l15.228-396.396h22.332    c6.653,0,12.049-5.394,12.049-12.049C477.472,53.635,472.078,48.241,465.423,48.241z M208.285,24.097h95.43v24.143h-95.43V24.097z     M403.784,467.809c-0.433,11.268-9.605,20.094-20.882,20.094H129.099c-11.276,0-20.448-8.827-20.882-20.095L93.025,72.338h325.952    L403.784,467.809z" />
    <path d="M182.63,181.571c-0.127-6.575-5.494-11.817-12.042-11.817c-0.078,0-0.158,0-0.236,0.002    c-6.652,0.128-11.943,5.626-11.815,12.278l3.781,196.634c0.126,6.575,5.495,11.817,12.042,11.817c0.078,0,0.158,0,0.236-0.002    c6.653-0.128,11.943-5.624,11.815-12.278L182.63,181.571z" />
    <path d="M255.998,169.753c-6.654,0-12.049,5.394-12.049,12.049v196.634c0,6.654,5.394,12.049,12.049,12.049    c6.655,0,12.049-5.394,12.049-12.049V181.802C268.047,175.148,262.653,169.753,255.998,169.753z" />
    <path d="M341.645,169.756c-6.628-0.147-12.151,5.162-12.278,11.815l-3.781,196.634c-0.129,6.653,5.162,12.15,11.815,12.278    c0.078,0.001,0.158,0.002,0.236,0.002c6.546,0,11.916-5.244,12.042-11.817l3.781-196.634    C353.588,175.38,348.299,169.883,341.645,169.756z" />
  </svg>
);
