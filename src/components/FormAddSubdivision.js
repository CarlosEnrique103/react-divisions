import { Form, Button, Select } from "antd";
import "./FormAddSubdivision.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUpdateDivision,
} from "../features/division/divisionSlice";

function FormAddSubdivision({ division }) {
  const divisions = useSelector((state) => state.division.divisions);
  const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { Option } = Select;

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} es necesario!",
    types: {
      number: "${label} debería ser un número",
    },
    number: {
      range: "${label} debería ser mayor o igual a 1",
    },
  };

  const onFinish = (values: any) => {
    //console.log(values.division.parent_id, {parent_id: division.id})
    dispatch(
      fetchUpdateDivision({
        id: values.division.parent_id,
        parent: { parent_id: division.id },
      })
    );
  };

  return (
    <div className="FormSubivision">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <p>
          Selecciona las subdivisiones que deseas agregar. Estas se encontrarán
          debajo de Dirección General en el organigrama de la organización.
        </p>
        <Form.Item name={["division", "parent_id"]}>
          <Select placeholder="Por favor selecciona una división">
            {divisions
              .filter((d) => d.id !== division.id)
              .map((division) => (
                <Option key={division.id} value={division.id}>
                  {division.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Añadir
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormAddSubdivision;
