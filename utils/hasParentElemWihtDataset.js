export const hasParentElemWihtDataset = (
  e,
  datasetName,
  datasetValue,
  callback,
) => {
  let check = true;
  let target = e.target;
  let go = true;

  while (go) {
    if (target) {
      if (target?.dataset?.[datasetName] == datasetValue) {
        go = false;
        check = false;
      } else {
        target = target.parentNode;
      }
    } else {
      go = false;
    }
  }

  if (check) {
    callback?.();
  }

  return check;
};
