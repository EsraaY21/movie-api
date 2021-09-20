export default function HomeHero() {
  const backgroundImage =
    'https://images.pexels.com/photos/7234275/pexels-photo-7234275.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

  return (
    <div className="HomeHero">
      <div
        className="hero"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '30rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            width: '100%',
            height: '30rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Find your favourite movies here</h1>
        </div>
      </div>
    </div>
  );
}
