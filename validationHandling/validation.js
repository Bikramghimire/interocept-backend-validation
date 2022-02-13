const nameValidation = (name) => {
  if (name) {
    if (!(name.length >= 5)) {
      res.status(400).send({ message: "name must be greater than or equal" });
    }
  } else {
    res.status(400).send({ message: "cannot be empty" });
  }
};
module.exports = {
  nameValidation,
};
