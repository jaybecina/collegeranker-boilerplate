import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { Card, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setColleges } from "../redux/feature/colleges/collegeSlice";
import { useGetCollegesFetcher } from "../hooks/useGetCollegesFetcher";
import Spinner from "../components/Spinner/Spinner";
import { ICollege } from "../redux/feature/colleges/interfaces/interfaces";
import Table from "../components/Table/Table";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import { IDataSourceItem } from "../components/Table/interfaces/interfaces";
import { generateRandomGrade } from "../helpers/generateRandomGrade";

function CollegeView() {
  const [showPanel, setShowPanel] = useState(true);
  const dispatch: Dispatch<any> = useDispatch();

  let paramUrl: string;

  paramUrl = "/search?country=Philippines";

  const { data, isRefetching, refetch, isLoading } =
    useGetCollegesFetcher(paramUrl);

  const colleges = useSelector(
    // @ts-ignore
    (state) => state.colleges
  );

  useEffect(() => {
    if (data?.data?.length > 0) {
      // get only specific number of data
      const selectData = data?.data?.slice(0, 4);
      dispatch(setColleges(selectData));
    }

    return () => {
      // Cleanup code (if needed)
    };
  }, [data]);

  const initialDataSource: IDataSourceItem[] = [
    {
      key: "1",
      label: <strong>DIVERSITY</strong>,
      grade: generateRandomGrade(),
    },
    {
      key: "2",
      label: <strong>OUTCOMES</strong>,
      grade: generateRandomGrade(),
    },
    {
      key: "3",
      label: <strong>VALUES</strong>,
      grade: generateRandomGrade(),
    },
  ];

  const [dataSource, setDataSource] =
    useState<IDataSourceItem[]>(initialDataSource);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Card title={colleges?.selectedCollege} className="w-full">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <div className="p-4 bg-gray-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                scelerisque odio a felis congue, at vestibulum ligula tincidunt.
              </p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="p-4 bg-gray-100">
              <div className="max-w-screen-md w-full">
                <Table data={dataSource} setData={setDataSource} />
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <InfoPanel />
    </>
  );
}

export default CollegeView;
