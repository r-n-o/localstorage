const item = window.localStorage.getItem("SECRET");
if (item === null) {
  console.error("not able to retrieve item in localstorage: nothing under SECRET");
  alert("not able to retrieve item in localstorage: nothing under SECRET");
} else {
  console.log(`retrieved secret: ${item}`);
  alert(`retrieved secret: ${item}`);
}
