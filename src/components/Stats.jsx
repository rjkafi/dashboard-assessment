const statsData = [
  {
    id: 1,
    title: "Total Calls Today",
    value: "127",
    change: "+12%",
    // icon: "",
    iconBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "AI-Handled Calls",
    value: "98",
    change: "+77%",
    // icon: "",
    iconBg: "bg-purple-500",
  },
  {
    id: 3,
    title: "Warm Transfer",
    value: "23",
    change: "+18%",
    // icon: "",
    iconBg: "bg-orange-500",
  },
  {
    id: 4,
    title: "Appointments Booked",
    value: "34",
    change: "+8%",
    // icon: "",
    iconBg: "bg-green-500",
  },
  {
    id: 5,
    title: "Missed / Failed Calls",
    value: "6",
    change: "-3%",
    // icon: "",
    iconBg: "bg-red-500",
    negative: true,
  },
  {
    id: 6,
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    // icon: "",
    iconBg: "bg-indigo-500",
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
          const Icon = item.icon;

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
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                {/* <Icon className="w-6 h-6 text-white" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
