import { Form, Input, InputNumber, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateDivision, fetchDivisions } from "../features/division/divisionSlice";

import "./FormCreateDivision.scss";

function FormCreateDivision() {
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
    dispatch(fetchCreateDivision(values.division));
  };

  return (
    <div className="Form">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["division", "name"]}
          label="Division"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["division", "parent_id"]}
          label="División superior"
        >
          <Select placeholder="Por favor selecciona una división">
            <Option value={null}>
              Ninguno
            </Option> 
            {divisions.map((division) => (
              <Option key={division.id} value={division.id}>
                {division.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["division", "nivel"]}
          label="Nivel"
          rules={[{ type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["division", "collaborators"]}
          label="Colaboradores"
          rules={[{ type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["division", "name_ambassador"]}
          label="Embajador"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Crear Division
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormCreateDivision;
