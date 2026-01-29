const activities = [
  {
    id: 1,
    text: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    color: "bg-green-400",
  },
  {
    id: 2,
    text: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    color: "bg-yellow-400",
  },
  {
    id: 3,
    text: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    color: "bg-green-400",
  },
  {
    id: 4,
    text: "Call dropped after 12 seconds",
    time: "15 min ago",
    color: "bg-red-400",
  },
];

const RecentActivity = () => {
  return (
    <div
      className="
        w-full max-w-140 
        bg-[#0F172B]/50
        border 
      border-[#2B7FFF]/20  
        rounded-2xl
         p-4 text-white
      "
    >
      <h2 className="text-lg font-semibold mb-1.5">Recent Activity</h2>

      <div className="space-y-2 ">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 bg-[#1D293D]/50 p-2.5 rounded-lg"
          >
            <span className={`w-2 h-2 mt-2 rounded-full ${item.color}`}></span>

            <div>
              <p className="text-sm">{item.text}</p>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
