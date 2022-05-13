import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const Datalist = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url: "https://media-exp1.licdn.com/dms/image/C4D03AQExheo0sff_yQ/profile-displayphoto-shrink_200_200/0/1590072898568?e=1630540800&v=beta&t=_W-gWZewSBYQ-UAjpGvR8h_8Vvo202IHQQissbK2aKc",
  },
  {
    id: 3,
    url: "https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj",
  },
];

function DndDiv() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Item",
    drop: (item) => addItemToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBoard = (id) => {
    const dataList = Datalist.filter((picture) => id === picture.id);
    setBoard((board) => [...board, Datalist[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {DataList.map((Data) => {
          return <Card props={data} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((Data) => {
          return <Card props={data} />;
        })}
      </div>
    </>
  );
}

export default DndDiv;
