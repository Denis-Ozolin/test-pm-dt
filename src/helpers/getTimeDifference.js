const getTimeDifference = time => {
  const formattedTime = time.split('-');
  const currentDate = new Date().toLocaleDateString().split('.');

  return Number(currentDate[0] - formattedTime[2]);
};

export default getTimeDifference;
