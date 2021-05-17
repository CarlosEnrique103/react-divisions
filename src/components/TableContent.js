import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDivisions } from "../features/division/divisionSlice";
import { Table, Spin } from "antd";
import FormAddSubdivision from "./FormAddSubdivision";
import ModalContent from "./ModalContent";
import "./TableContent.scss";

function TableContent() {
  const divisions = useSelector((state) => state.division.divisions);
  const status = useSelector((state) => state.division.status);
  const dispatch = useDispatch();
  let tableContent;

  useEffect(() => {
    dispatch(fetchDivisions());
  }, [dispatch]);

  if (status === "sucecced") {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Division Superior",
        dataIndex: "upperDivision",
        sorter: {
          compare: (a, b) => a.upperDivision - b.upperDivision,
        },
      },
      {
        title: "Colaboradores",
        dataIndex: "collaborators",
        sorter: {
          compare: (a, b) => a.collaborators - b.collaborators,
        },
      },
      {
        title: "Nivel",
        dataIndex: "nivel",
        sorter: {
          compare: (a, b) => a.nivel - b.nivel,
        },
      },
      {
        title: "Subdivisiones",
        dataIndex: "subdivisions",
        sorter: {
          compare: (a, b) => a.subdivisions - b.subdivisions,
        },
        render: (text, key) => (
          <div className="Table-subdivisions">
            <span>{text}</span>
            <ModalContent title={`Añadir subdivisiones a ${key.name}`}>
              <FormAddSubdivision />
            </ModalContent>
          </div>
        ),
      },
      {
        title: "Embajadores",
        dataIndex: "name_ambassador",
        sorter: {
          compare: (a, b) => a.ambassador - b.ambassador,
        },
      },
    ];
    let dataNew = divisions.map((division, index) => ({
      ...division,
      key: ++index,
      upperDivision: division.parentId || "-",
      subdivisions: 0,
    }));
    tableContent = (
      <Table columns={columns} dataSource={dataNew} onChange={onChange} />
    );
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="TableContent">
      {status === "pending" ? <Spin /> : tableContent}
    </div>
  );
}

export default TableContent;
