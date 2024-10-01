import { Form, Modal, Input, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useResetFormOnCloseModal } from "../../hooks/useResetFormOnCloseModal.jsx";

export function AddEventModal({ eventObject, isOpen, setModalOpen, setEventsData }) {
  const [form] = Form.useForm();

  const initialValues = {
    date: dayjs(eventObject.start),
    start: dayjs(eventObject.start),
  };

  const closeModal = () => {
    setModalOpen(false);
    form.resetFields();
  };

  useResetFormOnCloseModal({ form, isOpen });

  const onFinish = values => {
    const newEvent = {
      id: uuidv4(),
      title: values.title,
      start: dayjs(values.start).toDate(),
      end: dayjs(values.start).toDate(),
      desc: values.desc,
    };
    setEventsData(prev => [...prev, newEvent]);
    setModalOpen(false);
  };

  return (
    <Modal
      width={250}
      open={isOpen}
      cancelButtonProps={{ danger: true, size: "small", variant: "text" }}
      okButtonProps={{ onClick: form.submit, ghost: true, size: "small", variant: "text" }}
      okText="Save"
      destroyOnClose={true}
      onCancel={closeModal}
      centered={true}
    >
      {isOpen && (
        <Form form={form} layout="vertical" initialValues={initialValues} onFinish={onFinish}>
          <Form.Item name="title" label="event name" rules={[{ required: true }, { max: 30 }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="event date" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="start" label="event time" rules={[{ required: true }]}>
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>
          <Form.Item name="desc" label="notes">
            <Input />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
}
