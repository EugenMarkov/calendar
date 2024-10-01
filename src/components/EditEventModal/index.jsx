import { Form, Modal, Input, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { useResetFormOnCloseModal } from "../../hooks/useResetFormOnCloseModal.jsx";

export function EditEventModal({ eventObject, isOpen, setModalOpen, setEventsData }) {
  const [form] = Form.useForm();

  const initialValues = {
    title: eventObject.title,
    date: dayjs(eventObject.start),
    start: dayjs(eventObject.start),
    desc: eventObject.desc,
  };

  const discardEvent = () => {
    setEventsData(prev => prev.filter(evObj => evObj.id !== eventObject.id));
    setModalOpen(false);
    form.resetFields();
  };

  const closeModal = () => {
    setModalOpen(false);
    form.resetFields();
  };

  useResetFormOnCloseModal({ form, isOpen });

  const onFinish = values => {
    const newEvent = {
      id: eventObject.id,
      title: values.title,
      start: dayjs(values.date)
        .startOf("day")
        .add(dayjs(values.start).hour(), "hour")
        .add(dayjs(values.start).minute(), "minute")
        .toDate(),
      end: dayjs(values.date)
        .startOf("day")
        .add(dayjs(values.start).hour(), "hour")
        .add(dayjs(values.start).minute(), "minute")
        .toDate(),
      desc: values.desc,
    };
    setEventsData(prev => prev.map(evObj => (evObj.id === newEvent.id ? newEvent : evObj)));
    setModalOpen(false);
  };

  return (
    <Modal
      width={250}
      open={isOpen}
      cancelButtonProps={{ onClick: () => discardEvent(), danger: true, size: "small", variant: "text" }}
      okButtonProps={{ onClick: form.submit, ghost: true, size: "small", variant: "text" }}
      cancelText="Discard"
      okText="Edit"
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
