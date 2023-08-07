function checkDataType(arg) {
  const dataType = typeof arg;
  const message =
    dataType === "object" && Array.isArray(arg) ? "array" : dataType;

  console.log(`Тип данных аргумента: ${message}`);
}

checkDataType(10); // Тип данных аргумента: number
checkDataType([98, 220, 34]); // Тип данных аргумента: array
checkDataType("Hi"); // Тип данных аргумента: string
checkDataType(null); // Тип данных аргумента: object
checkDataType(true); // Тип данных аргумента: boolean
checkDataType({}); // Тип данных аргумента: object
