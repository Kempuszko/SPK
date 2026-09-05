"use client";

import { createCalendarEvent, deleteCalendarEvent } from "@/app/_lib/actions";
import { HiOutlineClock } from "react-icons/hi2";
import Input from "./Input.js";
import Select from "./Select";
import { FormActions } from "./FormActions";
import { format } from "date-fns";
import toast from "react-hot-toast";

function Form({ selected, type, action, userId, close, text, data }) {
  async function handlePostSubmit(formData) {
    try {
      await action(formData);
      if (typeof close === "function") close();
      toast.success(`Pomyślnie ${text === "Edytuj" ? "zedytowano" : "dodano"}`);
    } catch (error) {
      toast.error("Wystąpił błąd podczas zapisywania posta");
    }
  }

  async function handleCalendarEditSubmit(formData) {
    try {
      await action(formData);
      if (typeof close === "function") close();
      toast.success("Pomyślnie zedytowano wydarzenie");
    } catch (error) {
      toast.error("Błąd podczas edycji wydarzenia");
    }
  }

  async function handleCalendarSubmit(formData) {
    if (formData.get("eventDate") === "01/01/1970") {
      toast.error("Wybierz dzień");
      return;
    }

    try {
      await createCalendarEvent(formData);
      if (typeof close === "function") close();
      toast.success("Pomyślnie dodano wydarzenie");
    } catch (error) {
      toast.error("Nie udało się dodać wydarzenia");
      console.error(error);
    }
  }

  async function handleDeleteEvent(e) {
    e.preventDefault();

    try {
      await deleteCalendarEvent(data.id);

      if (typeof close === "function") close();
      toast.success("Pomyślnie usunięto wydarzenie");
    } catch (error) {
      console.error("Błąd podczas usuwania:", error);
      toast.error("Nie udało się usunąć wydarzenia");
    }
  }

  if (type === "post")
    return (
      <form
        className="flex flex-col items-center gap-8"
        action={handlePostSubmit}
      >
        <Input
          type="text"
          placeholder="Tytuł"
          name="postTitle"
          defaultValue={text && data?.postTitle}
          required={true}
        />
        <Input
          type="textarea"
          placeholder="Treść..."
          name="postDescription"
          defaultValue={text && data?.postDescription}
          required={true}
        />
        <input type="hidden" value={userId} name="postCreatedBy" />
        {text && <input type="hidden" value={data.id} name="id" />}

        <FormActions text={text || "Dodaj"} />
      </form>
    );

  if (type === "calendar")
    return (
      <form
        className="2xl:w-2xl h-1/2 2xl:mx-auto flex flex-col 2xl:gap-6 md:gap-4 2xs:gap-2"
        action={handleCalendarSubmit}
      >
        <input
          type="hidden"
          name="eventDate"
          value={selected ? format(selected, "dd/MM/yyyy") : "01/01/1970"}
        />
        <div className="flex justify-center gap-14 items-center">
          <div className="flex items-center gap-2">
            <HiOutlineClock />
            <label className="font-bold">Godzina:</label>
          </div>
          <div className="flex gap-2">
            <Select type="hours" name="timeHours" />
            <Select type="minutes" name="timeMinutes" />
          </div>
        </div>
        <Input
          type="textarea"
          placeholder="Wydarzenie..."
          name="eventDescription"
          required={true}
        />

        <FormActions type="calendar" />

        {selected === null && (
          <p className="self-center font-semibold text-xl text-red-500">
            Pamiętaj aby wybrać dzień!
          </p>
        )}
      </form>
    );

  if (type === "calendarEdit")
    return (
      <form
        className="mx-auto flex flex-col gap-6"
        action={handleCalendarEditSubmit}
      >
        <input type="hidden" name="id" value={data.id} />
        <input
          type="hidden"
          name="eventCreatedBy"
          value={data.eventCreatedBy}
        />
        <div className="flex justify-center gap-14 items-center">
          <div className="flex items-center gap-2">
            <HiOutlineClock />
            <label className="font-bold">Godzina:</label>
          </div>
          <div className="flex gap-2">
            <Select
              type="hours"
              name="timeHours"
              defaultValue={data.eventTime.slice(0, 2)}
            />
            <Select
              type="minutes"
              name="timeMinutes"
              defaultValue={data.eventTime.slice(3, 5)}
            />
          </div>
        </div>
        <Input
          type="textarea"
          defaultValue={data.eventDescription}
          placeholder="Wydarzenie..."
          name="eventDescription"
          required={true}
        />

        <FormActions type="calendarEdit" onDelete={handleDeleteEvent} />
      </form>
    );
}

export default Form;
