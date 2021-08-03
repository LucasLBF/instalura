import { breakpointsMedia } from "./breakpointsMedia";

export const propToStyle = (propName) => {
  return function (props) {
    const propValue = props[propName];
    if (typeof propValue === "string") {
      return {
        [propName]: props[propName],
      };
    } else if (typeof propValue === "object") {
      console.log(propValue);
      const newObj = {};
      for (const key in propValue) {
        newObj[key] = {
          [propName]: propValue[key],
        };
      }
      // console.log(newObj);
      return breakpointsMedia(newObj);
    }
  };
};
