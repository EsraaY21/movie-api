export default function HomeHero() {
  const backgroundImage =
    'https://images.unsplash.com/photo-1571818684035-c1afe7eab7f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="HomeHero">
      <div
        className="hero"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}
