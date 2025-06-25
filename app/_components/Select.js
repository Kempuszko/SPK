function Select({ type, name = "", defaultValue = "" }) {
  const commonStyles = `bg-amber-200 border-amber-300 dark:bg-blue-950 p-1 border dark:border-blue-800 rounded-full w-22 transition-all duration-200  focus:ring-4 dark:ring-blue-800 ring-amber-300  outline-none focus:outline-none `;

  if (type === "minutes")
    return (
      <select
        className={`${commonStyles}`}
        name={name}
        defaultValue={defaultValue}
        required
      >
        <option value="">Minuta</option>
        {Array.from({ length: 12 }, (_, i) => i * 5).map((x) => (
          <option value={("0" + x).slice(-2)} key={x}>
            {("0" + x).slice(-2)}
          </option>
        ))}
      </select>
    );
  if (type === "hours")
    return (
      <select
        className={`${commonStyles}`}
        name={name}
        defaultValue={defaultValue}
        required
      >
        <option value="">Godzina</option>
        {Array.from({ length: 24 }, (_, i) => i).map((x) => (
          <option className="h-10" value={("0" + x).slice(-2)} key={x}>
            {("0" + x).slice(-2)}
          </option>
        ))}
      </select>
    );
}

export default Select;
