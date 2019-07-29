import { Iterable } from "immutable";
import React from "react";

export const ToJS = WrapComponent => 
  WrapComponentProps => {
    const key = 0;
    const value = 1;
    const propsJS = Object.entries(WrapComponentProps).reduce(
      (newProps, wrapProps) => {
        newProps[wrapProps[key]] = Iterable.isIterable(wrapProps[value])
          ? wrapProps[value].toJS()
          : wrapProps[value];
        return newProps;
      },
      {}
    );
    return <WrapComponent {...propsJS} />;
  };

