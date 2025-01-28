import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const formFields: Record<string, string>[] = [
  { id: "date", label: "Date *", type: "date" },
  { id: "time", label: "Time *", type: "time" },
  { id: "name", label: "Name *", type: "text" },
  { id: "phone", label: "Phone *", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "numberOfDiners", label: "Number of Diners *", type: "number" },
];

const Reservation = () => {
  const navigate = useNavigate();

  const formik = useFormik<Record<string, string | number>>({
    validateOnChange: true,
    initialValues: {
      date: "",
      time: "",
      name: "",
      numberOfDiners: 1,
      email: "",
      phone: "",
      note: "",
    },
    validationSchema: yup.object({
      date: yup.date().required("Date is a required field"),
      time: yup.string().required("Time is a required field"),
      numberOfDiners: yup
        .number()
        .required("Number of diners is required")
        .min(1, "Minimum 1 diner required")
        .max(30, "Maximum 30 diners allowed"),
      email: yup.string().email("Invalid email format"),
      phone: yup.string().required("Phone is a required field"),
      name: yup
        .string()
        .required("Name is a required field")
        .min(4, "Name must be at least 4 characters")
        .max(80, "Name cannot exceed 80 characters"),
      note: yup.string().max(250, "Note cannot exceed 250 characters"),
    }),
    onSubmit: async (values) => {
      localStorage.setItem("customerReservation", JSON.stringify(values));
      navigate("/reservation/success");
    },
  });

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-8 text-[#F4CE14] uppercase">
        Reservation
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 max-w-[600px] w-full"
      >
        {formFields.map(({ id, label, type }) => (
          <div key={id} className="flex flex-col gap-1 form-field">
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              name={id}
              type={type}
              value={formik.values[id]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-input ${
                formik.errors[id] && formik.touched[id] ? "border-red-500" : ""
              }`}
            />
            {formik.errors[id] && formik.touched[id] && (
              <span className="text-red-500">{formik.errors[id]}</span>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-1 form-field">
          <label htmlFor="note">Note</label>
          <textarea
            id="note"
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-textarea ${
              formik.errors.note && formik.touched.note ? "border-red-500" : ""
            }`}
          />
          {formik.errors.note && formik.touched.note && (
            <span className="text-red-500">{formik.errors.note}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`bg-[#F4CE14] text-white py-2 px-4 rounded-lg ${
            formik.isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#e2bc12] transition"
          }`}
        >
          {formik.isSubmitting ? "Submitting..." : "Reserve a table now"}
        </button>
      </form>
    </section>
  );
};

export default Reservation;
