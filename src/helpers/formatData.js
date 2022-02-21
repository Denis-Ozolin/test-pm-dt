const formatData = (from, to) => {
  const years = Number(to.split('-')[0] - from.split('-')[0]);
  const months = Number(to.split('-')[1] - from.split('-')[1]);
  return `${years * 12 + months} months`;
};

export default formatData;
