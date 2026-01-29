import { FiCalendar, FiCheckCircle, FiClock } from "react-icons/fi";

const AppointmentCard = () => {
  const stats = [
    {
      title: "Total Booked",
      value: 34,
      sub: "+8 this week",
      icon: <FiCalendar />,
      color: "text-blue-400",
    },
    {
      title: "AI Booked",
      value: 28,
      sub: "82% of total",
      icon: <FiCheckCircle />,
      color: "text-green-400",
    },
    {
      title: "Pending",
      value: 3,
      sub: "Awaiting confirmation",
      icon: <FiClock />,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-[#0F173B]/50 border border-[#2B7FFF]/20 rounded-2xl p-4 md:p-5 "
        >
          <div className="flex items-center gap-2 text-sm text-[#90A1B9]">
            <span className={`${item.color} text-xl`}>{item.icon}</span>
            {item.title}
          </div>
          <h2 className="text-3xl font-semibold leading-9 my-2">
            {item.value}
          </h2>
          <p className="text-sm text-[#90A1B9] mt-1">{item.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;
