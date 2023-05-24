import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className='quoteBox'>
        
        <article className='quoteBox___phrase'>
          <p>{phrase}</p>
        </article>
        <button className='quoteBox___btn' onClick={handleChangeQuote}><img src="/images/bg5.png" alt="reload" /></button>
      </section>
  )+
}

export default QuoteBox
