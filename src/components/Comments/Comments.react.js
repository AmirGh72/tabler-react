// @flow

import * as React from "react";
import cn from "classnames";
import List from "../List/List.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Comments({ className, children }: Props): React.Node {
  const classes = cn("card-list-group", className);
  return <List.Group className={classes}>{children}</List.Group>;
}

export default Comments;