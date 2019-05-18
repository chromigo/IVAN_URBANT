import * as React from "react";
import {IContext} from '../../App/App';
import {CharAvatar} from '../../CharAvatar/CharAvatar';
import {Modal} from '../../Modal/Modal';
import {ICard} from '../../models/models';
import "./MainPage.less";

interface MainPageProps extends IContext {
}

interface MainPageState {
  showLootbox?: boolean;
  showCard?: boolean;
  hiddenCards?: number[];
  activeCard?: number;
}

export class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {showLootbox: false, showCard: false, hiddenCards: [], activeCard: null};
  }

  render(): JSX.Element {
    const {name, level, lootboxes, experience, coins, avatar} = this.props.char;

    return (
      <div>
        <h1>{name}</h1>
        <div className="level">{level}</div>
        <div>Монет: {coins}</div>
        <div>Exp: {experience}</div>
        <div><CharAvatar type={avatar} staticPic/></div>
        {lootboxes && lootboxes.length
          ? <div onClick={() => this.setState({showLootbox: true})}
                 className="lootboxClosed"/>
          : null}
        {this.renderLootboxModal(lootboxes)}
        {this.renderCardModal()}
      </div>
    )
  }

  private renderLootboxModal(lootboxes: ICard[]): JSX.Element {
    return this.state.showLootbox && (
      <Modal onClose={() => this.setState({showLootbox: false})}>
        <div className="cards">
          <div className="heading">Забирайте карточки</div>
          <div className="items">
            {lootboxes.map((card: ICard, i: number) => {
              if (!this.state.hiddenCards.filter(h => h === i).length) {
                return <div className="item"
                            key={i}
                            onClick={() => this.onShowCard(i)}/>
              }
            })}
          </div>
          <div className="lootboxOpened"/>
        </div>
      </Modal>
    )
  }

  private renderCardModal(): JSX.Element {
    const cardIndex = this.state.activeCard;
    const currentCard = this.props.char && this.props.char.lootboxes && this.props.char.lootboxes[cardIndex];
    const updatedHiddenCards = [...this.state.hiddenCards].concat(cardIndex);

    if (currentCard && this.state.showCard) {
      const {title, description, experience, coins} = currentCard;

      return (
        <Modal onClose={() => this.setState({showCard: false, showLootbox: true, hiddenCards: updatedHiddenCards})}>
          <div className="cardInfo">
            <div className="bar">
              <div className="barItem">{experience}</div>
              <div className="barItem">{coins}</div>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="acceptWrap">
              <div className="accept">Приступить</div>
            </div>
          </div>
        </Modal>
      );
    }
  }

  private onShowCard = (activeCard: number) => this.setState({showLootbox: false, showCard: true, activeCard});
}