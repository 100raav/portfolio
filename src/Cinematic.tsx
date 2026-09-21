export default function Cinematic({ show, leaving }: { show: boolean; leaving: boolean }) {
  return (
    <div className={`cinematic ${show ? 'show' : ''} ${leaving ? 'leaving' : ''}`} aria-hidden={!show}>
      <div className="cinema-bar top" />
      <div className="cinema-bar bottom" />
      <div className="cinema-core">
        <img className="cinema-avatar" src="avatar.svg" alt="Saurav Bichha — profile photo" width={104} height={104} />
        <p className="cinema-label">A PORTFOLIO BY</p>
        <h2 className="cinema-name">Saurav Bichha</h2>
        <p className="cinema-role">Full-Stack Software Engineer · Java · Spring Boot · React · Node.js</p>
        <div className="cinema-sweep" />
      </div>
    </div>
  )
}