const data = Array(6).fill({
  name: "Jane.D",
  phone: "01960685765",
  email: "admin@gmail.com",
  device: "Apple / iPhone 13 Pro",
  repair: "Screen",
  date: "02/06/2026",
  slot: "1",
});

const times = ["09:00", "10:00", "11:00", "12:00", "02:00", "03:00"];

const BookingTable = () => {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block bg-[#111B3B] border border-[#162F61] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {[
                "Client Name",
                "Phone",
                "Email",
                "Device",
                "Repair",
                "Date",
                "Slot",
                "Start",
              ].map((h) => (
                <th key={h} className="px-4 py-3 text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t   border-[#162F61]">
                <td className="px-7 py-4.5 text-[#51A2FF]">{row.name}</td>
                <td className="px-7 py-4.5">{row.phone}</td>
                <td className="px-7 py-4.5">{row.email}</td>
                <td className="px-7 py-4.5">{row.device}</td>
                <td className="px-7 py-4.5">{row.repair}</td>
                <td className="px-7 py-4.5">{row.date}</td>
                <td className="px-7 py-4.5">{row.slot}</td>
                <td className="px-7 py-4.5">{times[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((row, i) => (
          <div
            key={i}
            className="bg-[#111B3B] border border-[#162F61] rounded-xl p-4 text-sm"
          >
            <p className="text-blue-400 font-medium">{row.name}</p>
            <p>{row.device}</p>
            <p>{row.repair}</p>
            <p>Date: {row.date}</p>
            <p>Time: {times[i]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookingTable;
