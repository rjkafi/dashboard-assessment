import { getIconUrl } from "../utils";

const statsData = [
  {
    id: 1,
    title: "Total Calls Today",
    value: "127",
    change: "+12%",
    icon: "call.png",
    iconBg: "bg-linear-to-t from-[#00B8DB] to-[#2B7FFF]",
  },
  {
    id: 2,
    title: "AI-Handled Calls",
    value: "98",
    change: "+77%",
    icon: "handle-call.png",
    iconBg: "bg-linear-to-t from-[#F6339A] to-[#AD46FF]",
  },
  {
    id: 3,
    title: "Warm Transfer",
    value: "23",
    change: "+18%",
    icon: "Transfer.png",
    iconBg: "bg-linear-to-t from-[#FB2C36] to-[#FF6900]",
  },
  {
    id: 4,
    title: "Appointments Booked",
    value: "34",
    change: "+8%",
    icon: "appointments.png",
    iconBg: "bg-linear-to-t from-[#00BC7D] to-[#00C950]",
  },
  {
    id: 5,
    title: "Missed / Failed Calls",
    value: "6",
    change: "-3%",
    icon: "failed.png",
    iconBg: "bg-linear-to-t from-[#FF2056] to-[#FB2C36]",
    negative: true,
  },
  {
    id: 6,
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    icon: "duration.png",
    iconBg: "bg-linear-to-t from-[#2B7FFF] to-[#615FFF]",
  },
];

const Stats = () => {
  return (
    <section className="w-full">
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-4
          justify-items-center
        "
      >
        {statsData.map((item) => {
          return (
            <div
              key={item.id}
              className="
     w-full  
    max-w-93.5
    h-36.5
    bg-[#0F172B]/50
    border 
    border-[#2B7FFF]/20  
    rounded-2xl
    p-6
    flex
    gap-4
    justify-between
    items-center
    text-white
    shadow-lg
  "
            >
              {/* Left Content */}
              <div>
                <p className="text-sm text-[#90A1B9] mb-2">{item.title}</p>
                <h2 className="text-3xl font-semibold mb-4">{item.value}</h2>
                <p
                  className={`text-sm  ${
                    item.negative ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {item.change}
                </p>
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${item.iconBg}`}
              >
                <img
                  className="w-6 h-6"
                  src={getIconUrl(item.icon)}
                  alt={item.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
