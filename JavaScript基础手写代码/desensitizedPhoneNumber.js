const desensitizedPhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/(\d{3})\d{4}(\d{3})/g, "$1****$2");
};

console.log(desensitizedPhoneNumber("13214345675"));

const upperCase = (str) => {
  return str.replace(/_([a-z])/g, (match, letters) => {
    return letters.toUpperCase();
  });
};
