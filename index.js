export default () => {
  let hour = new Date().getHours();
  if (hour < 12) {
    return "morning";
  }
  if (hour > 12 && hour < 17) {
    return "afternoon";
  }
  if (hour > 17) {
    return "evening";
  }
  if (hour < 0 || hour > 24) {
    return "hell";
  }
};
