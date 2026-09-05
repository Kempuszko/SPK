"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";

export function FormActions({ type, text, onDelete }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-center gap-16">
      {type === "calendarEdit" && (
        <Button type="button" pendingMessage="Usuń" onClick={onDelete}>
          Usuń
        </Button>
      )}

      {type === "calendar" && (
        <Button type="reset" pendingMessage="Reset">
          Reset
        </Button>
      )}

      <Button
        type="submit"
        pendingMessage={pending ? "Zapisywanie..." : "Dodawanie..."}
      >
        {text || "Potwierdź"}
      </Button>
    </div>
  );
}
