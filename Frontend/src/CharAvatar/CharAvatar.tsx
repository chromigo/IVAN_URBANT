import * as React from "react";
import * as classnames from "classnames";
import './CharAvatar.less';

interface CharAvatarProps {
  type: 1 | 2 | 3;
  staticPic?: boolean;
  selected?: boolean;
  onSelect?: (type: 1 | 2 | 3) => void;
}

export class CharAvatar extends React.Component<CharAvatarProps> {
  render(): JSX.Element {
    const {type, selected, onSelect, staticPic} = this.props;

    const personClassName = type === 1 ? "first" : type === 2 ? "second" : type === 3 ? "third" : "";

    const className = classnames(
      "avatar",
      personClassName,
      selected && "selected",
      staticPic && "full"
    );

    return <div className={className} onClick={() => onSelect && onSelect(type)}/>;
  }
}