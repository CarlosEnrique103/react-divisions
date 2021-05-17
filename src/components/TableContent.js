import { Table } from 'antd';
import FormAddSubdivision from './FormAddSubdivision';
import ModalContent from './ModalContent';
import './TableContent.scss';

function TableContent() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Division Superior',
      dataIndex: 'upperDivision',
      sorter: {
        compare: (a, b) => a.upperDivision - b.upperDivision,
      },
    },
    {
      title: 'Colaboradores',
      dataIndex: 'collaborators',
      sorter: {
        compare: (a, b) => a.collaborators - b.collaborators,
      },
    },
    {
      title: 'Nivel',
      dataIndex: 'nivel',
      sorter: {
        compare: (a, b) => a.nivel - b.nivel,
      },
    },
    {
      title: 'Subdivisiones',
      dataIndex: 'subdivisions',
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
      )
    },
    {
      title: 'Embajadores',
      dataIndex: 'ambassador',
      sorter: {
        compare: (a, b) => a.ambassador - b.ambassador,
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "Aohn",
      upperDivision: "Jrown",
      collaborators: 12,
      nivel: 1,
      subdivisions: 10,
      ambassador: "Wuan Carlos Echevarria"
    },
    {
      key: "2",
      name: "Bohn",
      upperDivision: "Krown",
      collaborators: 15,
      nivel: 2,
      subdivisions: 20,
      ambassador: "Xuan Carlos Echevarria"
    },
    {
      key: "3",
      name: "Cohn",
      upperDivision: "Lrown",
      collaborators: 20,
      nivel: 3,
      subdivisions: 2,
      ambassador: "Duan Carlos Echevarria"
    }
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  


  return (
    <div>
    <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

export default TableContent