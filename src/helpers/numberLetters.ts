const getNumberOfLeters = (texts: string) => {
  if (texts) {
    if (texts.length > 50) {
      const subText = texts.substring(0, 50);
      return `${subText}...`;
    } else {
      return texts;
    }
  }

  return '';
};

export default getNumberOfLeters;
