import React, { useEffect, useState } from "react";

const mapKeyToTitle: Record<string, string> = {
  phone: "Phone Number",
  email: "Email",
  name: "Name",
  numberOfDiners: "Number Of Diners",
  note: "Note",
  date: "Date",
  time: "Time",
};

const ReserveSuccess = () => {
  const [info, setInfo] = useState<Record<string, string | number>>({});

  useEffect(() => {
    try {
      const data = JSON.parse(
        localStorage.getItem("customerReservation") ?? "{}"
      );
      setInfo(data);
    } catch (error) {
      console.error("Failed to load reservation data:", error);
      setInfo({});
    }
  }, []);

  if (Object.keys(info).length === 0) {
    return (
      <section className="flex flex-col items-center">
        <p className="text-2xl font-bold text-center mb-8 text-red-500">
          No reservation found. Please make a reservation first.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <p className="text-2xl font-bold text-center mb-8 text-[#F4CE14] uppercase">
        Reservation
      </p>
      <div className="bg-gray-200 shadow-sm p-6 rounded-lg max-w-[600px] w-full ">
        <p
          className="text-2xl font-bold text-green-600 text-center mb-8"
          aria-live="polite"
        >
          We have already made a reservation for you. Thank you for choosing{" "}
          <span className="text-[#F4CE14]">Little Lemon</span>!
        </p>
        {Object.entries(info).map(([key, value]) => (
          <p key={key}>
            <strong>{mapKeyToTitle[key] ?? key}: </strong>
            {value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ReserveSuccess;
