function checkDataType(arg) {
  const dataType = typeof arg;
 
  const message =
    dataType === "object" && Array.isArray(arg) ? "array" : dataType;

  console.log(`Тип данных аргумента: ${message}`);
}

checkDataType(10);
checkDataType([98, 220, 34]); 
checkDataType("Hi"); 
checkDataType(null); 
checkDataType(true); 
checkDataType({}); 
