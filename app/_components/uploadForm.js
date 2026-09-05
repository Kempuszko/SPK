"use client";

import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";

function UploadForm({ onClick, userId }) {
  async function handleSubmit(formData) {
    console.log(formData);
    try {
      await onClick(formData);
      toast.success("Pomyślnie dodano plik");
    } catch (error) {
      console.error(error);
      toast.error("Wystąpił błąd podczas przesyłania pliku");
    }
  }

  return (
    <form
      className="flex 2xs:flex-col xl:flex-row items-center 2xs:gap-3 md:gap-4 xl:gap-6"
      action={handleSubmit}
    >
      <label className="text-xl font-semibold">Dodaj plik</label>
      <input type="hidden" name="userId" value={userId} />
      <Input type="file" name="file" required />
      <Button pendingMessage="Dodawanie...">Dodaj</Button>
    </form>
  );
}

export default UploadForm;
