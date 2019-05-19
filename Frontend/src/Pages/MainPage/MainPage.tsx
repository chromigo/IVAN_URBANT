import * as classnames from "classnames";
import * as React from "react";
import {IContext} from '../../App/App';
import {CharAvatar} from '../../CharAvatar/CharAvatar';
import {Modal} from '../../Modal/Modal';
import {CardStatus, CardType, ICard, ICardInfo} from '../../models/models';
import "./MainPage.less";

const barCaptionDictionary = {
  [CardType.Question]: "Вопрос",
  [CardType.Task]: "Задание",
  [CardType.Advice]: "Совет"
}

interface MainPageProps extends IContext {
}

interface MainPageState {
  showLootbox?: boolean;
  showCard?: boolean;
  activeCard?: number;
  selectedAnswer?: number;
  answerGuessed?: boolean;
}

export class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {showLootbox: false, showCard: false, activeCard: null, selectedAnswer: null};
  }

  render(): JSX.Element {
    const {name, level, lootboxes, experience, coins, avatar} = this.props.char;
    const userpicClassName = classnames(
      "userpic",
      `userpic${1}`
    );

    const expPercent = experience > 100 ? 100 : experience;

    return (
      <div>
        <h1>{name}</h1>
        <div className="info">
          <div className="userpicWrap"><div className={userpicClassName}/></div>
          <div className="exp">
            <span>LVL: {level}</span>
            <div className="expBar" style={{width: `${expPercent}%`}}/>
            <div className="expCaption">EXP</div>
          </div>
        </div>
        <div className="coins">{coins}$</div>
        <div className="charInfo">
          <div className="mainLootbox">
            {!this.state.showLootbox && lootboxes && lootboxes.length
              ? <div onClick={() => this.setState({showLootbox: true})}
                     className="lootboxClosed"/>
              : null}
          </div>
          <div className="mainChar"><CharAvatar type={avatar} staticPic/></div>
        </div>
        {this.renderLootboxModal(lootboxes)}
        {this.renderCardModal()}
      </div>
    )
  }

  private renderLootboxModal(lootboxes: ICardInfo[]): JSX.Element {
    return this.state.showLootbox && (
      <Modal onClose={() => this.setState({showLootbox: false})}>
        <div className="cards">
          {/*<div className="heading">Забирайте карточки</div>*/}
          <div className="items">
            {lootboxes.map((cardInfo: ICardInfo, i: number) => {
              if (cardInfo && cardInfo.card && cardInfo.status !== CardStatus.Skipped) {
                return (
                  <div className="item" key={i} onClick={() => this.onShowCard(i)}>
                    <div className="cardSymbol">?</div>
                  </div>
                )
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
    const currentCardInfo = this.props.char && this.props.char.lootboxes && this.props.char.lootboxes[cardIndex];
    const currentCard = currentCardInfo && currentCardInfo.card;

    if (currentCard && this.state.showCard) {
      const {title, description, experience, type, answers, correctAnswer, id} = currentCard;
      const acceptEnable = type === CardType.Question ? this.state.selectedAnswer !== null : true;

      const barCaption = barCaptionDictionary[type];

      return (
        <Modal onClose={() => this.setState({showCard: false, showLootbox: true})} solid>
          <div className="cardInfo">
            <div className="bar">
              <div className="barCaption">{barCaption}</div>
              <span className="barExp">exp</span>
              <span className="barExpCount">{experience}</span>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            {type === CardType.Question && answers && answers.length ? this.renderAnswers(answers) : null}
            <div className="acceptWrap">
              <div className={`accept ${!acceptEnable ? "disabled" : ""}`}
                   onClick={() => this.onAccept(type, id, answers, correctAnswer)}>
                {type === CardType.Question ? "Проверить" : "Приступить"}
              </div>
            </div>
          </div>
        </Modal>
      );
    }
  }

  private renderAnswers(answers: string[]): JSX.Element {
    return (
      <div className="answers">
        {answers.map((a, i) => {
          const selected = this.state.selectedAnswer === i;
          const guessed = selected && this.state.answerGuessed === true;
          const notGuessed = selected && this.state.answerGuessed === false;

          const answerClassName = classnames(
            "answer",
            guessed ? "correct" : notGuessed ? "wrong" : ""
          );

          return (
            <label key={i} className={answerClassName}>
              <input type="radio"
                     className="answerInput"
                     name="answer"
                     checked={selected}
                     onChange={() => this.setState({selectedAnswer: i, answerGuessed: null})}/>
              <span>{a}</span>
            </label>
          )
        })}
      </div>
    );
  }

  private onShowCard = (activeCard: number) => this.setState({showLootbox: false, showCard: true, activeCard});

  private onAccept = (type: CardType, cardId: string, answers: string[], correctAnswer: string) => {
    if (type === CardType.Question) {
      const currentAnswer = answers && answers[this.state.selectedAnswer];
      if (currentAnswer === correctAnswer) {
        this.setState({answerGuessed: true});
      } else {
        this.setState({answerGuessed: false});
      }
    }
  }
}