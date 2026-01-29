import React from "react";
import AppointmentCard from "../components/AppointmentCard";
import BookingLink from "../components/BookingLink";
import BookingTable from "../components/BookingTable";
import PaginationBar from "../components/PaginationBar";

export default function Appointments() {
  return (
    <div className="p-4 lg:p-8 space-y-6  text-white">
      <AppointmentCard />
      <BookingLink />
      <BookingTable />
      <PaginationBar />
    </div>
  );
}
