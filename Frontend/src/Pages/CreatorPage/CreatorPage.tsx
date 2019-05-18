import * as React from "react";
import {CharApi} from '../../api/CharApi';
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
          <div className={`${styles.avatar} ${styles.first} ${this.getSelectedClassName(1)}`}
               onClick={() => this.setState({avatar: 1})}/>
          <div className={`${styles.avatar} ${styles.second} ${this.getSelectedClassName(2)}`}
               onClick={() => this.setState({avatar: 2})}/>
          <div className={`${styles.avatar} ${styles.third} ${this.getSelectedClassName(3)}`}
               onClick={() => this.setState({avatar: 3})}/>
        </div>
        <div className={styles.createButtonWrap}>
          <div onClick={() => creatingEnable && CharApi.create(this.state)} className={createButtonStyles}>
            Create!
          </div>
        </div>
      </div>
    );
  }

  private getSelectedClassName(avatarType: 1 | 2 | 3): string {
    return this.state.avatar === avatarType ? styles.selected : "";
  }
}