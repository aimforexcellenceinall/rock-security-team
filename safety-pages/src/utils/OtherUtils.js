// A utility function for formatting dates
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // A utility function for capitalizing the first letter of a string
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // A utility function for truncating a string to a specified length
  export const truncateString = (string, length) => {
    if (string.length <= length) {
      return string;
    }
    return string.slice(0, length) + '...';
  };  