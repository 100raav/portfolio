import { EDUCATION, EXPERIENCE } from './data'
import Reveal from './Reveal'

interface Node {
  years: string
  title: string
  org: string
  meta: string
  grade?: string
  chip?: string
  loc?: string
}

function Entry({ n }: { n: Node }) {
  const [y0, y1] = n.years.split(' – ')
  const kind = n.grade ? 'edu' : 'work'
  return (
    <div className={`trow ${n.chip ? 'work' : ''}`}>
      <div className="tpill">
        <b>{y0}</b>
        <span>{y1 || ''}</span>
      </div>
      <div className="tnode">
        <i className={`tnode-core ${kind}`} />
      </div>
      <div className="ttext">
        <h4>{n.title}</h4>
        <p className="torg">
          {n.org}
          {n.loc ? <span className="tloc"> · {n.loc}</span> : null}
        </p>
        <p className="tmeta">{n.meta}</p>
        {n.grade ? <span className="tchip edu">{n.grade}</span> : null}
        {n.chip ? <span className="tchip work">{n.chip}</span> : null}
      </div>
    </div>
  )
}

export function Timeline({
  id,
  tag,
  title,
  titleGrad,
  items,
  spine,
}: {
  id: string
  tag: string
  title: string
  titleGrad: string
  items: Node[]
  spine: string
}) {
  return (
    <section id={id} className="section timeline-section">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">{tag}</span>
          <h2>
            {title} <span className={`grad grad-${titleGrad}`}>{titleGrad}</span>
          </h2>
        </div>
      </Reveal>
      <div className={`timeline ${spine}`}>
        {items.map((n) => (
          <Reveal key={n.title}>
            <Entry n={n} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <>
      <Timeline
        id="education"
        tag="02 · Education"
        title="Education"
        titleGrad="Journey"
        items={EDUCATION}
        spine="spine-edu"
      />
      <Timeline
        id="experience"
        tag="03 · Experience"
        title="Experience"
        titleGrad="Path"
        items={EXPERIENCE}
        spine="spine-work"
      />
    </>
  )
}