  const DateParser = (dateStr) => {
      const date = new Date(`${dateStr}T00:00:00`);
      const options = { month: 'long', day: 'numeric', year: 'numeric' };

      const formattedDate = date.toLocaleDateString('en-US', options);
      const ordinalSuffix = getOrdinalSuffix(date.getDate());

      const result = formattedDate.replace(/(\d+)/, `$1${ordinalSuffix}`);

      return result;

    }

    function getOrdinalSuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
    
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  
  export default DateParser;
  