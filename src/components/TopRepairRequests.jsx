const repairData = [
  { id: 1, name: "Screen Repair", value: 156 },
  { id: 2, name: "Battery Replacement", value: 89 },
  { id: 3, name: "Back Glass Repair", value: 67 },
  { id: 4, name: "Software Issues", value: 45 },
];

const maxValue = Math.max(...repairData.map((d) => d.value));

const TopRepairRequests = () => {
  return (
    <div
      className="
        w-full max-w-145 h-96.5
         bg-[#0F172B]/50
        border 
      border-[#2B7FFF]/20  
        rounded-2xl p-6 text-white
      "
    >
      <h2 className="text-lg font-semibold mb-6">Top Repair Requests</h2>

      <div className="space-y-5">
        {repairData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between text-sm mb-2">
              <span>{item.name}</span>
              <span className="text-gray-400">{item.value} requests</span>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full">
              <div
                className="h-2 bg-linear-to-br from-[#2B7FFF] to-[#00B8DB]  rounded-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRepairRequests;
