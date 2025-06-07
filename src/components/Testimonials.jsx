export default function Testimonials() {
  const testimonials = [
    { name: 'Alice', text: 'This group keeps me sharp and motivated!' },
    { name: 'Bob', text: 'Fantastic community and great resources.' },
    { name: 'Carol', text: 'I have learned so much about data security here.' }
  ];
  return (
    <ul className="list-disc pl-5 space-y-2">
      {testimonials.map((t) => (
        <li key={t.name}>
          <strong>{t.name}:</strong> {t.text}
        </li>
      ))}
    </ul>
  );
}
