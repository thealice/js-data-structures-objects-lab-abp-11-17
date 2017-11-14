let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = delete driver.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // delete driver.key;
  return driver;
}
