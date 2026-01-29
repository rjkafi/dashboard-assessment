import React from "react";
import AppointmentCard from "../components/AppointmentCard";
import BookingLink from "../components/BookingLink";
import BookingTable from "../components/BookingTable";
import PaginationBar from "../components/PaginationBar";

export default function Appointments() {
  return (
    <div className="space-y-6  text-white">
      <AppointmentCard />
      <BookingLink />
      <BookingTable />
      <PaginationBar />
    </div>
  );
}
