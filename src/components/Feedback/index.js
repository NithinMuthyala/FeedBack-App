import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isActive: true}

  clicked = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  feedbackpage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-container">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="card">
          {emojis.map(eachObj => (
            <li key={eachObj.id} className="item">
              <button onClick={this.clicked}>
                <img
                  className="image"
                  src={eachObj.imageUrl}
                  alt={eachObj.name}
                />
                <span>{eachObj.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  responsepage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="response-card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="loveimage" />
        <h1>Thank You</h1>
        <p className="description">
          we will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isActive} = this.state
    console.log(isActive)
    return (
      <div className="bg-container">
        {isActive ? this.feedbackpage() : this.responsepage()}
      </div>
    )
  }
}

export default Feedback
