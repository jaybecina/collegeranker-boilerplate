import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { IDataSourceItem, IData } from "./interfaces/interfaces";
import { generateRandomGrade } from "../../helpers/generateRandomGrade";

const columns = [
  {
    title: "Grades",
    dataIndex: "grade",
    key: "grade",
    width: "50%",
    className: "text-center",
  },
  {
    title: "Labels",
    dataIndex: "label",
    key: "label",
    width: "50%",
    className: "text-center",
  },
];

const GradesAndLabelsCard: React.FC<IData> = ({ data, setData }) => {
  const colleges = useSelector(
    // @ts-ignore
    (state) => state.colleges
  );

  const handleRefresh = () => {
    const refreshedData = data?.map((item) => ({
      ...item,
      grade: generateRandomGrade(),
    }));
    setData(refreshedData);
  };

  useEffect(() => {
    if (colleges?.selectedCollege) {
    }
  }, [colleges]);

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      showHeader={false}
      bordered
      className="vertical-table h-[400px] m-6"
    />
  );
};

export default GradesAndLabelsCard;
