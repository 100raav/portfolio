import { useEffect, useState } from 'react'

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[idx % words.length]
    const speed = del ? 45 : 95
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) setTimeout(() => setDel(true), 1400)
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (!next) {
          setDel(false)
          setIdx((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, del, idx, words])

  return (
    <span className="typewriter">
      {text}
      <span className="caret" aria-hidden />
    </span>
  )
}