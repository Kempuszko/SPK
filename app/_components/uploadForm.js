"use client";

import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";

function UploadForm({ onClick, userId }) {
  return (
    <form
      className="flex 2xs:flex-col xl:flex-row items-center 2xs:gap-3 md:gap-4 xl:gap-6 2xs:py-4"
      action={(formData) => {
        onClick(formData);
        toast.success("Pomyslnie dodano");
      }}
    >
      <label className="text-xl font-semibold">Dodaj plik</label>
      <input type="hidden" name="userId" value={userId} />
      <Input type="file" name="file" />
      <Button pendingMessage="Dodawanie...">Dodaj</Button>
    </form>
  );
}

export default UploadForm;
