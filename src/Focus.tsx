import { FOCUS } from './data'
import Reveal from './Reveal'

export default function Focus() {
  return (
    <section className="band">
      <Reveal>
        <div className="focus-grid">
          {FOCUS.map((f, i) => (
            <div key={f.title} className="focus-card" style={{ animationDelay: `${i * 90}ms` }}>
              <span className="focus-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}