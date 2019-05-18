import * as React from "react";
import {CharApi} from '../../api/CharApi';
import {CharAvatar} from '../../CharAvatar/CharAvatar';
import {IChar} from '../../models/models';
import * as styles from "./CreatorPage.less";
import * as classnames from "classnames";

interface CreatorPageProps {

}

export class CreatorPage extends React.Component<CreatorPageProps, Partial<IChar>> {
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {
      name: "",
      avatar: null
    };
  }

  render(): JSX.Element {
    const creatingEnable = this.state.name && this.state.avatar;

    const createButtonStyles = classnames(
      styles.createButton,
      !creatingEnable && styles.createButtonDisabled
    );

    return (
      <div>
        <div className={styles.heading}>
          Выбери персонажа и придумай ему имя!
        </div>
        <div className={styles.nameWrap}>
          <input type="text"
                 className={styles.nameInput}
                 value={this.state.name}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}/>
        </div>
        <div className={styles.avatars}>
          <CharAvatar selected={this.getSelectedClassName(1)} type={1} onSelect={this.onSelectAvatar}/>
          <CharAvatar selected={this.getSelectedClassName(2)} type={2} onSelect={this.onSelectAvatar}/>
          <CharAvatar selected={this.getSelectedClassName(3)} type={3} onSelect={this.onSelectAvatar}/>
        </div>
        <div className={styles.createButtonWrap}>
          <div onClick={() => creatingEnable && CharApi.create(this.state)} className={createButtonStyles}>
            Create!
          </div>
        </div>
      </div>
    );
  }

  private getSelectedClassName =(avatarType: 1 | 2 | 3): boolean => this.state.avatar === avatarType;

  private onSelectAvatar = (avatarType: 1 | 2 | 3) => this.setState({avatar: avatarType});
}