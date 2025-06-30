function Input({
  type,
  disabled = false,
  defaultValue = "",
  placeholder = "",
  name = "",
  required = false,
}) {
  const commonStyles =
    "2xl:w-1/2 mx-auto bg-amber-200 border-amber-300 dark:bg-blue-950 px-4 py-2 border dark:border-blue-800 rounded-2xl placeholder-gray-500 transition-all focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none";

  if (type === "file")
    return (
      <input
        className="border hover:file:bg-amber-300 file:bg-amber-200 border-amber-300 dark:border-blue-800 rounded-2xl dark:file:bg-blue-950 file:p-2 dark:hover:file:bg-blue-800 file:transition-all transition-all   cursor-pointer file:cursor-pointer"
        type={type}
        name={name}
        required
      />
    );

  if (type === "textarea")
    return (
      <textarea
        className={`${commonStyles} resize-none 2xs:w-3/4 xs:w-3/5 sm:w-1/2 md:w-4/12 xl:w-3/12`}
        placeholder={placeholder}
        rows={4}
        cols={50}
        name={name}
        defaultValue={defaultValue}
        required={required}
      />
    );

  return (
    <input
      className={`${commonStyles} ${defaultValue ? "font-bold" : ""}`}
      type={type}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );
}

export default Input;
