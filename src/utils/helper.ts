export function getFormatedDate() {
  const dateNow: Date = new Date();
  return (
    ("0" + dateNow.getDate()).slice(-2) +
    "-" +
    ("0" + (dateNow.getMonth() + 1)).slice(-2) +
    "-" +
    dateNow.getFullYear() +
    " " +
    ("0" + dateNow.getHours()).slice(-2) +
    ":" +
    ("0" + dateNow.getMinutes()).slice(-2)
  );
}
