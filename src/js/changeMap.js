const maps = {
  CH: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8402.658128635934!2d-87.80330376358984!3d41.875901624672636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sua!4v1642296188540!5m2!1sen!2sua',
  LA: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44514.89894024379!2d-118.30268783426858!3d33.977384973507526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sua!4v1642545272215!5m2!1sen!2sua',
  NY: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6048.383227056725!2d-73.80350202225064!3d40.71379814955359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260e112437e21%3A0x67b9c4019a2b9b32!2sJamaica%20Hills%2C%20Queens%2C%20NY%2011432%2C%20USA!5e0!3m2!1sen!2sua!4v1642545219562!5m2!1sen!2sua',
};

export const handeMapChange = (element, buttons, map) => {
  const city = element.getAttribute('data-city');
  map.setAttribute('src', maps[city]);
  buttons.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  console.log(city);
};