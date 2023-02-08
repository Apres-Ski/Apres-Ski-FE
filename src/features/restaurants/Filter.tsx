export const Filter = () => {
//we'll have useSelector here to pull the state of these different filters

  return (
    <div>
      <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Filters</h1>
        <button onClick={() => console.log('close filter')} style={{position: 'absolute', right: 0}}>X</button>
      </section>
      <section> 
        <h2>Vibe</h2>
        <button onClick={() => console.log('family-friendly')}>Family Friendly</button>
        <button onClick={() => console.log('casual')}>Casual</button>
        <button onClick={() => console.log('upscale')}>Upscale</button>
        <button onClick={() => console.log('quick & easy')}>Quick & Easy</button>
        <button onClick={() => console.log('lively')}>Lively</button>
        <button onClick={() => console.log('fun')}>Fun</button>
        <button onClick={() => console.log('cozy')}>Cozy</button>
      </section>
      <section> 
        <h3>Alcohol</h3>
        <button onClick={() => console.log('alcohol toggle')}>Toggle goes here</button>
      </section>
      <section> 
        <h4>Happy Hour</h4>
        <button onClick={() => console.log('happy hour toggle')}>Toggle goes here</button>
      </section>

    </div>
  )
}
