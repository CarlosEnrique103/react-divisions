import { Form, Button, Select } from "antd";
import "./FormAddSubdivision.scss";

function FormAddSubdivision() {
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
    console.log(values);
  };

  return (
    <div className="FormSubivision">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["division", "parent_id"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Por favor selecciona su división",
            },
          ]}
        >
          <Select placeholder="Por favor selecciona una división">
            <Option value="1">Marketing</Option>
            <Option value="2">Publicidad</Option>
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
