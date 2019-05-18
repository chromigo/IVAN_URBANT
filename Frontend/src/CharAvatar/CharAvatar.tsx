import * as React from "react";
import * as classnames from "classnames";
import * as styles from './CharAvatar.less';

interface CharAvatarProps {
  selected: boolean;
  type: 1 | 2 | 3;
  onSelect: (type: 1 | 2 | 3) => void;
}

export class CharAvatar extends React.Component<CharAvatarProps> {
  render(): JSX.Element {
    const {type, selected, onSelect} = this.props;

    const personClassName = type === 1 ? styles.first : type === 2 ? styles.second : type === 3 ? styles.third : "";

    const className = classnames(
      styles.avatar,
      personClassName,
      selected && styles.selected
    );

    return <div className={className} onClick={() => onSelect(type)}/>;
  }
}