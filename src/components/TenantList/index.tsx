import React, { useState } from "react";
import { FullWidthModal } from "../FullWidthModal/Loadable";
import "./style.scss";

interface Props {
  count?: number;
}

const userList = [
  { name: "Lal", room: "100" },
  { name: "Vikram", room: "100" },
  { name: "Nadish", room: "103" },
  { name: "Sahal", room: "104" },
  { name: "Vinu", room: "104" },
];
export const TenantList = ({ count }: Props) => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const selectItem = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected((prev) => [...prev, name]);
    }
  };

  return (
    <>
      <div className="tenant-list">
        <div className="add-tenant-div ">
          <div className="title-block">
            <h2>Tenants</h2>
            <label htmlFor="label">{count}</label>
          </div>
          <button onClick={() => setVisible(true)} className="white-btn">
            + Add tenant
          </button>
        </div>
        {selected.length > 0 && (
          <div className="d-flex pt-2 pb-2">
            <button
              onClick={() => setSelected([])}
              className="cancel-normal-btn mr-auto"
            >
              Cancel
            </button>
            <button className="remove-btn mr-2">Remove</button>
            <button className="light-btn">Assign new room</button>
          </div>
        )}
        <div className="d-flex flex-column">
          <div className="list-item">
            <p className="header">Name</p>
            <p className="header">Room no.</p>
          </div>
          {userList.map((user) => (
            <div className="list-item">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selected.includes(user?.name)}
                  name={user?.name + "check"}
                />
                {selected.length > 0 && (
                  <span
                    onClick={() => selectItem(user.name)}
                    className="checkbox"
                  ></span>
                )}
                <label
                  onClick={() => selectItem(user.name)}
                  htmlFor={user?.name + "check"}
                  className="title"
                >
                  {user.name}
                </label>
              </div>
              <p className="value">{user?.room}</p>
            </div>
          ))}
        </div>
      </div>
      <FullWidthModal visible={visible} onCancel={() => setVisible(false)} />
    </>
  );
};
