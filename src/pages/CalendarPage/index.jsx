import { Typography } from "antd";
import { CustomCalendar } from "../../components/CustomCalendar/index.jsx";

const { Text } = Typography;

export function CalendarPage() {
  return (
    <>
      <Text style={{ fontSize: 28, marginBottom: 32, display: "block" }}>Calendar</Text>
      <CustomCalendar />
    </>
  );
}
